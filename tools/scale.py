# Rescale costs in an era file: python tools/scale.py era4.js "1e5:6,1e7:4,1e9:2.5,1e10:1.5"
import re, sys
p, spec = sys.argv[1], sys.argv[2]
steps = [(float(a), float(b)) for a, b in (x.split(':') for x in spec.split(','))]
def f(v):
    for lim, k in steps:
        if v < lim: return v * k
    return v
def num(v):
    v = float('%.2g' % v)
    if v >= 1e6:
        m, e = ('%e' % v).split('e'); m = float(m)
        return ('%g' % m) + 'e' + str(int(e))
    return str(int(v))
s = open(p, encoding='utf-8').read()
s = re.sub(r"(cost: )([0-9.e]+)", lambda m: m.group(1) + num(f(float(m.group(2)))), s)
s = re.sub(r"(c: )([0-9.e]+)( \})", lambda m: m.group(1) + num(f(float(m.group(2)))) + m.group(3), s)
open(p, 'w', encoding='utf-8').write(s)
print('ok')
