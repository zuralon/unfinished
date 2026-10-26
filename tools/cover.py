# Draws cover.png (1000x600): one strip per era, the pixel in the middle.
from PIL import Image, ImageDraw, ImageFont
W, H = 1000, 600
im = Image.new('RGB', (W, H), '#000')
d = ImageDraw.Draw(im)
F = 'C:/Windows/Fonts/'
def font(n, s):
    try: return ImageFont.truetype(F + n, s)
    except OSError: return ImageFont.load_default()
strips = [
    ('#041004', '#3dff7a', 'TERMLINK'),
    ('checker', '#000', 'PIXEL-OS 1'),
    ('#0000a8', '#ffff55', 'MINO-DOS'),
    ('#008080', '#fff', 'Winbows 95'),
    ('#3a7fe0', '#fff', 'Winbows XD'),
    ('#1c1c22', '#fff', 'iBrick'),
    ('#1c2f5e', '#cfe3ff', 'Winbows 12'),
]
sw = W / len(strips)
small = font('consolab.ttf', 15)
for i, (bg, fg, name) in enumerate(strips):
    x0, x1 = int(i * sw), int((i + 1) * sw)
    if bg == 'checker':
        d.rectangle([x0, 0, x1, H], fill='#fff')
        for y in range(0, H, 2):
            for x in range(x0 + (y // 2) % 2 * 2, x1, 4):
                d.point((x, y), fill='#000')
    else:
        d.rectangle([x0, 0, x1, H], fill=bg)
    if name == 'TERMLINK':
        for k, line in enumerate(['> BOOT', '> MEM 3 KB', '> COUNT.COM', '> AUTO.COM', '> LOAD', '> ERROR: OOM', '> UNLOAD', '> PATCH', '> *']):
            d.text((x0 + 12, 40 + k * 26), line, font=small, fill='#3dff7a')
    if name == 'iBrick':
        d.rounded_rectangle([x0 + 22, 120, x1 - 22, 480], 22, outline='#666', width=4, fill='#000')
        d.rectangle([x0 + 32, 150, x1 - 32, 440], fill='#2a5298')
    tw = d.textlength(name, font=small)
    d.rectangle([x0 + (x1 - x0 - tw) / 2 - 6, H - 44, x0 + (x1 - x0 + tw) / 2 + 6, H - 20], fill='#000' if fg != '#000' else '#fff')
    d.text((x0 + (x1 - x0 - tw) / 2, H - 42), name, font=small, fill=fg if fg != '#000' else '#000')
# center window
wx0, wy0, wx1, wy1 = 250, 150, 750, 430
d.rectangle([wx0 + 8, wy0 + 8, wx1 + 8, wy1 + 8], fill='#000')
d.rectangle([wx0, wy0, wx1, wy1], fill='#fff', outline='#000', width=3)
for y in range(wy0 + 6, wy0 + 30, 3):
    d.line([wx0 + 4, y, wx1 - 4, y], fill='#000')
t = font('consolab.ttf', 18)
tt = 'game.exe'
tw = d.textlength(tt, font=t)
d.rectangle([(wx0 + wx1 - tw) / 2 - 8, wy0 + 4, (wx0 + wx1 + tw) / 2 + 8, wy0 + 30], fill='#fff')
d.text(((wx0 + wx1 - tw) / 2, wy0 + 6), tt, font=t, fill='#000')
d.line([wx0, wy0 + 34, wx1, wy0 + 34], fill='#000', width=3)
big = font('consolab.ttf', 64)
title = 'PIXEL-OS'
tw = d.textlength(title, font=big)
d.text(((wx0 + wx1 - tw) / 2, wy0 + 60), title, font=big, fill='#000')
d.rectangle([492, wy0 + 165, 508, wy0 + 181], fill='#000')
sub = font('consola.ttf', 19)
s = 'one pixel. six computers. forty years.'
tw = d.textlength(s, font=sub)
d.text(((wx0 + wx1 - tw) / 2, wy0 + 215), s, font=sub, fill='#000')
im.save('cover.png')
print('ok')
