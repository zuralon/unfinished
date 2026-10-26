// Desktop icons. One drawing per icon (16x16 vector layers), shown in the style of each era:
// 1984 = 1-bit pixels, DOS = 16 EGA colors, Winbows 95 = 16 colors with outline and shading,
// XD = glossy vectors, iBrick = white glyph on a rounded tile, Winbows 12 = flat modern (only once Copixel recoded the program).

const R = (x, y, w, h) => `M${x} ${y}h${w}v${h}h${-w}z`;
const C = (x, y, r) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0z`;
const RR = (x, y, w, h, r) => `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`;
const NOTE = `M9 1.5V10.6A2.8 2.8 0 1 1 7.2 8V1.5ZM9 1.5C9.5 3.5 11.5 4.6 13 4.6V6.4C11.5 6.4 10 5.7 9 4.7Z`;
const GEAR = C(8, 8, 5) + R(7, 1, 2, 3) + R(7, 12, 2, 3) + R(1, 7, 3, 2) + R(12, 7, 3, 2) + `M2.6 4L4 2.6L6 4.6L4.6 6ZM13.4 4L12 2.6L10 4.6L11.4 6ZM2.6 12L4 13.4L6 11.4L4.6 10ZM13.4 12L12 13.4L10 11.4L11.4 10Z`;
const CUBE = [`M8 1L15 4.5L8 8L1 4.5Z`, `M1 4.5L8 8L8 15L1 11.5Z`, `M15 4.5L8 8L8 15L15 11.5Z`];
const ARROW = `M4 1L4 13L7 10.2L9.2 14.5L11 13.6L8.9 9.4L12.6 9.4Z`;

// layer: [color role, svg path, stroke width (optional), [dx, dy] (optional)]. Roles: a = main, b = accent, w = white, k = dark, or a #hex.
const ICONS = {
  monitor: { a: `#4a7bd1`, L: [[`#aab4bf`, RR(1, 1, 14, 11, 1)], [`a`, R(3, 3, 10, 7)], [`w`, R(7, 5, 2, 2)], [`#aab4bf`, R(6, 12, 4, 2) + R(4, 14, 8, 1.5)]] },
  pixel: { a: `#ff2d55`, L: [[`w`, R(4, 4, 8, 8)]] },
  floppy: { a: `#2c3e70`, L: [[`a`, RR(2, 1, 12, 14, 1)], [`#c8cdd2`, R(5, 1, 6, 4.5)], [`k`, R(9, 2, 1.2, 2.5)], [`w`, R(4, 8, 8, 6)], [`#8a9399`, R(5, 9.8, 6, 1) + R(5, 11.8, 6, 1)]] },
  box: { a: `#c8913c`, b: `#e8bb73`, L: [[`a`, R(2, 6, 12, 9)], [`b`, `M1 6L4 2H12L15 6Z`], [`#8a5a1f`, R(7, 6, 2, 9)]] },
  bag: { a: `#0a84ff`, L: [[`k`, `M5.5 5V4.2a2.5 2.5 0 0 1 5 0V5`, 1.4], [`a`, `M3 5H13L14 15H2Z`], [`w`, `M8 7L10.6 13H9.3L8 9.7L6.7 13H5.4Z`]] },
  chart: { a: `#27ae60`, b: `#2ecc71`, L: [[`a`, R(2, 9, 3, 5)], [`b`, R(6.5, 5, 3, 9)], [`a`, R(11, 2, 3, 12)], [`k`, R(1, 14, 14, 1.2)]] },
  note: { a: `#f1c40f`, b: `#3b6fd9`, L: [[`w`, R(3, 1, 10, 14)], [`a`, R(3, 1, 10, 3)], [`b`, R(5, 6, 6, 1.1) + R(5, 8.5, 6, 1.1) + R(5, 11, 4, 1.1)]] },
  mail: { a: `#e74c3c`, L: [[`w`, R(1, 3, 14, 10)], [`#7f8c8d`, `M1.6 3.6L8 9L14.4 3.6`, 1.3], [`a`, R(11, 4.6, 2.6, 2.6)]] },
  chat: { a: `#2ecc71`, L: [[`a`, `M2 3H14V11H7L4 14V11H2Z`], [`w`, R(4, 5.4, 8, 1.3) + R(4, 8, 5, 1.3)]] },
  help: { a: `#2f6fd6`, L: [[`a`, C(8, 8, 7)], [`w`, `M5.8 6.2a2.3 2.3 0 1 1 3.3 2.1c-.8.4-1.1.9-1.1 1.7`, 1.8], [`w`, R(7.1, 11.4, 1.9, 1.9)]] },
  arrow: { a: `#5856d6`, L: [[`w`, ARROW]] },
  autoclick: { a: `#5856d6`, b: `#f1c40f`, L: [[`w`, ARROW], [`b`, R(11.5, 1, 1.5, 3) + `M13.2 4.6l2-1.2.7 1.2-2 1.2z` + R(12.8, 6.6, 2.8, 1.4)]] },
  trophy: { a: `#e6b422`, b: `#a0522d`, L: [[`a`, `M4 3H2V5C2 6.5 3 7 4.3 7M12 3H14V5C14 6.5 13 7 11.7 7`, 1.2], [`a`, `M4 1.5H12V5.5C12 8.5 10.3 10 8 10C5.7 10 4 8.5 4 5.5Z` + R(7, 10, 2, 3)], [`b`, R(4.5, 13, 7, 2)]] },
  clock: { a: `#c0392b`, L: [[`a`, C(8, 8, 7)], [`w`, C(8, 8, 5.3)], [`k`, R(7.4, 3.8, 1.2, 4.6) + R(7.4, 7.6, 3.6, 1.2)]] },
  palette: { a: `#e8d5a3`, L: [[`a`, `M8 1.5C3.5 1.5 1 4.5 1 8C1 11.8 4 14.5 7.5 14.5C9 14.5 9.5 13.5 9 12.5C8.4 11.3 9.2 10.3 10.5 10.3H12.5C14 10.3 15 9.2 15 7.5C15 4 12 1.5 8 1.5Z`], [`#55ffff`, C(4.6, 6.3, 1.5)], [`#ff55ff`, C(8.4, 4.4, 1.5)], [`k`, C(11.8, 6.5, 1.5)], [`w`, C(4.5, 10.2, 1.4)]] },
  calc: { a: `#7f8c8d`, L: [[`a`, RR(3, 1, 10, 14, 1)], [`#b8e994`, R(4.5, 2.5, 7, 3.5)], [`w`, R(4.5, 7.5, 2.5, 2) + R(8.5, 7.5, 2.5, 2) + R(4.5, 11, 2.5, 2)], [`#e67e22`, R(8.5, 11, 2.5, 2)]] },
  robot: { a: `#95a5a6`, b: `#e74c3c`, L: [[`k`, R(7.3, 1.5, 1.4, 3)], [`b`, C(8, 1.6, 1.2)], [`a`, RR(3, 4, 10, 9, 1.5) + R(1.5, 7, 1.5, 3) + R(13, 7, 1.5, 3)], [`w`, R(5, 6.5, 2.2, 2.2) + R(8.8, 6.5, 2.2, 2.2)], [`k`, R(5.5, 10.5, 5, 1.2)]] },
  moon: { a: `#f1c40f`, b: `#ffffff`, L: [[`a`, `M10 1.8A6.5 6.5 0 1 0 14.5 11A5.2 5.2 0 0 1 10 1.8Z`], [`b`, R(12, 3, 1.5, 1.5) + R(2.5, 2.5, 1.3, 1.3) + R(13, 13, 1.3, 1.3)]] },
  blocks: { a: `#2980b9`, b: `#e67e22`, L: [[`a`, R(2, 2, 5, 5) + R(9, 9, 5, 5)], [`b`, R(9, 2, 5, 5) + R(2, 9, 5, 5)]] },
  term: { a: `#2ecc71`, L: [[`k`, RR(1, 2, 14, 12, 1)], [`#8a9399`, R(1, 2, 14, 2.2)], [`a`, `M3.5 6.5L6.5 9L3.5 11.5`, 1.6], [`a`, R(7.5, 10.6, 4, 1.5)]] },
  cube: { a: `#e74c3c`, L: [[`#f1948a`, CUBE[0]], [`a`, CUBE[1]], [`#922b21`, CUBE[2]]] },
  gear: { a: `#f39c12`, L: [[`a`, GEAR], [`w`, C(8, 8, 2)]] },
  gearS: { a: `#8e8e93`, L: [[`a`, GEAR], [`w`, C(8, 8, 2)]] },
  chip: { a: `#2d3436`, L: [[`#c8cdd2`, R(1.5, 4, 13, 1.2) + R(1.5, 7.4, 13, 1.2) + R(1.5, 10.8, 13, 1.2)], [`a`, R(4, 2.5, 8, 11)], [`w`, C(6, 4.6, 0.9)]] },
  shield: { a: `#27ae60`, L: [[`a`, `M8 1L14 3V8C14 11.5 11.5 14 8 15C4.5 14 2 11.5 2 8V3Z`], [`w`, `M5 8L7.2 10.2L11 6`, 1.8]] },
  handset: { a: `#c0392b`, L: [[`a`, `M1.5 6C1.5 3 4 2 8 2C12 2 14.5 3 14.5 6L11.5 7L10.5 5H5.5L4.5 7Z` + RR(3, 8, 10, 6, 1.5)], [`w`, R(5, 9.5, 1.4, 1.4) + R(7.3, 9.5, 1.4, 1.4) + R(9.6, 9.5, 1.4, 1.4) + R(5, 11.6, 1.4, 1.4) + R(7.3, 11.6, 1.4, 1.4) + R(9.6, 11.6, 1.4, 1.4)]] },
  bolt: { a: `#f1c40f`, L: [[`a`, `M9.5 1L3 9H7.2L6 15L13 6.5H8.8Z`]] },
  star: { a: `#9b59b6`, L: [[`a`, `M8 1L10 5.8L15 6.2L11.2 9.5L12.4 14.6L8 11.9L3.6 14.6L4.8 9.5L1 6.2L6 5.8Z`]] },
  bug: { a: `#c0392b`, L: [[`k`, R(1.5, 6, 13, 1) + R(1.5, 9, 13, 1) + R(1.5, 12, 13, 1) + C(8, 4.5, 2.5)], [`a`, C(8, 9.5, 4.5)], [`w`, R(6, 8, 1.5, 1.5) + R(8.7, 8, 1.5, 1.5)]] },
  clip: { a: `#95a5a6`, L: [[`a`, `M6 13V4a2 2 0 0 1 4 0V12a1 1 0 0 1-2 0V5.5`, 1.5], [`k`, C(6.4, 2.4, 0.8) + C(9.6, 2.4, 0.8)]] },
  cassette: { a: `#34495e`, b: `#e67e22`, L: [[`a`, RR(1, 3, 14, 10, 1)], [`b`, R(3, 4.5, 10, 3)], [`w`, C(5.3, 9.8, 1.6) + C(10.7, 9.8, 1.6)], [`k`, R(6.5, 9.3, 3, 1)]] },
  music: { a: `#8e44ad`, L: [[`a`, C(4.5, 12, 2.5) + C(11.5, 10.5, 2.5) + R(5.6, 3, 1.5, 9) + R(12.6, 1.5, 1.5, 9) + `M5.6 3L14.1 1.5V3.8L5.6 5.3Z`]] },
  tower: { a: `#16a085`, b: `#1abc9c`, L: [[`a`, `M8 5L11.5 15H10L8 9.5L6 15H4.5Z` + C(8, 5, 1.6)], [`b`, `M4.8 2.2A4.5 4.5 0 0 0 4.8 7.8M11.2 2.2A4.5 4.5 0 0 1 11.2 7.8`, 1.2]] },
  skull: { a: `#ecf0f1`, b: `#c0392b`, L: [[`a`, C(8, 7, 6) + R(5, 10, 6, 4.5)], [`b`, C(5.7, 7.2, 1.6) + C(10.3, 7.2, 1.6)], [`k`, R(6.4, 12, 1, 2.5) + R(8.6, 12, 1, 2.5)]] },
  server: { a: `#7f8c8d`, L: [[`a`, RR(3, 1, 10, 14, 1)], [`k`, R(4.5, 3, 7, 1.4) + R(4.5, 6, 7, 1.4) + R(4.5, 9, 7, 1.4)], [`#2ecc71`, C(10.5, 12.5, 1)], [`#f1c40f`, C(7.5, 12.5, 1)]] },
  globe: { a: `#2e86de`, b: `#f1c40f`, L: [[`a`, C(8, 8, 6.5)], [`w`, `M4.8 8.3H11C11 6 9.7 4.8 8 4.8C6 4.8 4.8 6.4 4.8 8.3C4.8 10.4 6.1 11.5 8 11.5C9.2 11.5 10.2 11 10.8 10`, 1.6], [`b`, `M1 11C3 13.5 13 7 15 4`, 1.2]] },
  people: { a: `#27ae60`, b: `#2e86de`, L: [[`b`, C(10.5, 4.5, 2.4) + `M6.5 13C6.5 9.5 8.5 8 10.5 8C12.5 8 14.5 9.5 14.5 13Z`], [`a`, C(5.5, 5.5, 2.4) + `M1.5 14.5C1.5 11 3.5 9 5.5 9C7.5 9 9.5 11 9.5 14.5Z`]] },
  stop: { a: `#e74c3c`, L: [[`a`, `M5 1H11L15 5V11L11 15H5L1 11V5Z`], [`w`, R(3.5, 7, 9, 2)]] },
  arrows: { a: `#27ae60`, b: `#2980b9`, L: [[`a`, `M5 1L9 5.5H6.5V15H3.5V5.5H1Z`], [`b`, `M11 15L7 10.5H9.5V1H12.5V10.5H15Z`]] },
  grass: { a: `#7cb342`, L: [[`#8d6e63`, CUBE[1]], [`#5d4037`, CUBE[2]], [`a`, CUBE[0]], [`#558b2f`, `M1 4.5L8 8L8 9.6L1 6.1Z`]] },
  dish: { a: `#c8cdd2`, b: `#2c3e50`, L: [[`b`, R(7, 10, 2, 4) + R(4.5, 14, 7, 1.5)], [`a`, `M2 3C2 9 6 11.5 11 10Z`], [`b`, `M5.5 7.5L11 3`, 1], [`#e74c3c`, C(11.3, 2.7, 1.2)]] },
  webserver: { a: `#7f8c8d`, b: `#2e86de`, L: [[`a`, RR(1, 1, 8, 14, 1)], [`k`, R(2.5, 3, 5, 1.2) + R(2.5, 6, 5, 1.2)], [`b`, C(11, 10.5, 4.3)], [`w`, `M11 6.2V14.8M6.7 10.5H15.3`, 0.9]] },
  torch: { a: `#34495e`, b: `#f1c40f`, L: [[`a`, R(5.5, 5.5, 5, 9.5)], [`#c8cdd2`, `M3 1.5H13L11 5.5H5Z`], [`b`, R(4.4, 1.5, 7.2, 1.6)], [`w`, R(7.2, 8, 1.6, 3)]] },
  sprout: { a: `#2ecc71`, L: [[`#8d6e63`, `M3.5 11H12.5L11.5 15H4.5Z`], [`#1e8449`, R(7.3, 6, 1.4, 5.5)], [`a`, `M8 7C8 3.5 5 2 2 2.5C2 5.5 4.5 7.5 8 7ZM8 6C8 3 10.5 1.5 14 1.8C14 4.8 11.5 6.5 8 6Z`]] },
  bird: { a: `#e74c3c`, b: `#f1c40f`, L: [[`a`, C(8, 9, 6)], [`#f5cba7`, `M4.5 12.5C6 14.6 10 14.6 11.5 12.5C10 13.2 6 13.2 4.5 12.5Z`], [`w`, C(6.2, 8.3, 1.5) + C(9.8, 8.3, 1.5)], [`k`, C(6.5, 8.5, 0.6) + C(9.5, 8.5, 0.6)], [`k`, `M4 4L7.5 6.5M12 4L8.5 6.5`, 1.2], [`b`, `M6.5 10.5H9.5L8 12.5Z`]] },
  tok: { a: `#111111`, L: [[`#25f4ee`, NOTE, 0, [-0.8, -0.5]], [`#fe2c55`, NOTE, 0, [0.8, 0.5]], [`w`, NOTE]] },
  candy: { a: `#e84393`, b: `#fdcb6e`, L: [[`b`, `M1 4L5 7L5 9L1 12ZM15 4L11 7L11 9L15 12Z`], [`a`, C(8, 8, 4.2)], [`w`, `M6 6.5C7 5.5 8.5 5.3 9.8 6.2`, 1]] },
  cloud: { a: `#74b9ff`, L: [[`a`, C(5, 10, 3.3) + C(10, 8, 4.5) + R(5, 9, 8.5, 4.3) + C(12.5, 11, 2.3)]] },
  orb: { a: `#6c5ce7`, b: `#00cec9`, L: [[`a`, C(8, 8, 7)], [`b`, C(8, 8, 4.5)], [`w`, `M8 3.5L9.1 6.9L12.5 8L9.1 9.1L8 12.5L6.9 9.1L3.5 8L6.9 6.9Z`]] },
  play: { a: `#e74c3c`, L: [[`a`, RR(1, 3, 14, 10, 3)], [`w`, `M6.3 5.5L11 8L6.3 10.5Z`]] },
  goggles: { a: `#2d3436`, b: `#6c5ce7`, L: [[`b`, R(0.5, 6.8, 15, 1.6)], [`a`, RR(2, 4, 12, 8, 2.2)], [`b`, RR(3.3, 6, 4, 4, 1.2) + RR(8.7, 6, 4, 4, 1.2)], [`w`, R(4, 6.6, 1.2, 1.2) + R(9.4, 6.6, 1.2, 1.2)]] },
  pad: { a: `#636e72`, b: `#00b894`, L: [[`a`, `M4 4H12C14.5 4 15.5 6 15 9L14.2 12.5C13.8 14 12 14.4 11 13L9.6 11H6.4L5 13C4 14.4 2.2 14 1.8 12.5L1 9C.5 6 1.5 4 4 4Z`], [`w`, R(3.2, 7.3, 4, 1.4) + R(4.5, 6, 1.4, 4)], [`b`, C(11, 7, 1) + C(12.7, 8.8, 1)]] },
  gpt: { a: `#10a37f`, L: [[`a`, RR(1, 2, 14, 10, 2.5) + `M4 11L4 15L8 11Z`], [`w`, `M8 3.8L8.9 6.1L11.2 7L8.9 7.9L8 10.2L7.1 7.9L4.8 7L7.1 6.1Z`]] },
  atom: { a: `#0984e3`, b: `#a29bfe`, L: [[`b`, `M1.5 8A6.5 2.6 0 1 0 14.5 8A6.5 2.6 0 1 0 1.5 8M4.75 2.37A6.5 2.6 60 1 0 11.25 13.63A6.5 2.6 60 1 0 4.75 2.37M4.75 13.63A6.5 2.6 -60 1 0 11.25 2.37A6.5 2.6 -60 1 0 4.75 13.63`, 1], [`a`, C(8, 8, 2)]] },
  window: { a: `#3b6fd9`, L: [[`w`, R(1, 2, 14, 12)], [`a`, R(1, 2, 14, 3)]] },
};

// which drawing each program uses; m = the program was recoded by Copixel (era 6)
const ICON_OF = {
  game: (e, m) => (e === 5 ? `pixel` : `monitor`), install: (e, m) => (e <= 3 ? `floppy` : e === 5 || m ? `bag` : `box`),
  notes: (e, m) => (e <= 3 ? `note` : e === 5 || m ? `chat` : `mail`), score: `chart`, help: `help`, auto: `autoclick`, cursor: `arrow`,
  trophy: `trophy`, clock: `clock`, cga: `palette`, calc: `calc`, bot: `robot`, saver: `moon`, defrag: `blocks`, hack: `term`, render: `cube`,
  comp: `gear`, tsr: `chip`, av: `shield`, bbs: `handset`, dl: `handset`, turbo: `bolt`, mega: `star`, virus: `bug`, bip: `clip`, macro: `cassette`,
  media: `music`, stream: e => (e === 6 ? `music` : `tower`), doom: `skull`, server: `server`, browser: `globe`, msn: `people`, popblock: `stop`,
  p2p: `arrows`, craft: `grass`, seti: `dish`, web: `webserver`, settings: `gearS`, flash: `torch`, farm: `sprout`, birds: `bird`, tok: `tok`,
  crush: `candy`, cloud: `cloud`, ai: `orb`, tube: (e, m) => (m ? `play` : `arrows`), vr: (e, m) => (m ? `goggles` : `grass`),
  cgame: (e, m) => (m ? `pad` : `globe`), gpt: (e, m) => (m ? `gpt` : `dish`), quantum: (e, m) => (m ? `atom` : `webserver`),
};

const EGA16 = `000000 0000aa 00aa00 00aaaa aa0000 aa00aa aa5500 aaaaaa 555555 5555ff 55ff55 55ffff ff5555 ff55ff ffff55 ffffff`.split(` `);
const VGA16 = `000000 800000 008000 808000 000080 800080 008080 c0c0c0 808080 ff0000 00ff00 ffff00 0000ff ff00ff 00ffff ffffff`.split(` `);
const rgb = h => [1, 3, 5].map(i => parseInt(h.replace(`#`, ``).padEnd(6, `0`).slice(i - 1, i + 1), 16));
const hex = c => `#` + c.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, `0`)).join(``);
const shade = (h, f) => hex(rgb(h).map(v => (f > 0 ? v + (255 - v) * f : v * (1 + f))));
const lum = h => { const [r, g, b] = rgb(h); return (0.3 * r + 0.59 * g + 0.11 * b) / 255; };
function nearest(h, pal) {
  const c = rgb(h);
  let best = pal[0], bd = Infinity;
  for (const p of pal) { const q = rgb(p), d = 3 * (c[0] - q[0]) ** 2 + 4 * (c[1] - q[1]) ** 2 + 2 * (c[2] - q[2]) ** 2; if (d < bd) { bd = d; best = p; } }
  return `#` + best;
}
const roleColor = (ic, r) => (r === `a` ? ic.a : r === `b` ? ic.b || ic.a : r === `w` ? `#ffffff` : r === `k` ? `#202020` : r);

// old eras: draw the layers on a 16x16 grid, keep a color per pixel, add the outline, map to the era's palette
function pixelIcon(ic, style) {
  const cv = document.createElement(`canvas`); cv.width = cv.height = 16;
  const x = cv.getContext(`2d`, { willReadFrequently: true });
  const grid = new Array(256).fill(null);
  for (const [role, d, sw, off] of ic.L) {
    x.setTransform(1, 0, 0, 1, off ? off[0] : 0, off ? off[1] : 0); x.clearRect(-2, -2, 20, 20);
    const p = new Path2D(d);
    if (sw) { x.lineWidth = sw; x.lineCap = x.lineJoin = `round`; x.stroke(p); } else x.fill(p);
    const px = x.getImageData(0, 0, 16, 16).data;
    for (let i = 0; i < 256; i++) if (px[i * 4 + 3] >= 110) grid[i] = roleColor(ic, role);
  }
  const out = x.createImageData(16, 16), set = (i, h) => { const c = rgb(h); out.data.set([c[0], c[1], c[2], 255], i * 4); };
  const at = (i, dx, dy) => { const X = i % 16 + dx, Y = (i >> 4) + dy; return X < 0 || Y < 0 || X > 15 || Y > 15 ? null : grid[Y * 16 + X]; };
  for (let i = 0; i < 256; i++) {
    const h = grid[i], X = i % 16, Y = i >> 4;
    if (!h) { if (at(i, 1, 0) || at(i, -1, 0) || at(i, 0, 1) || at(i, 0, -1)) set(i, `#000000`); continue; }
    // 1984: black or white, the accent color dithered
    if (style === `mac`) { set(i, h === ic.b && h !== ic.a ? ((X + Y) % 2 ? `#000000` : `#ffffff`) : lum(h) < 0.5 ? `#000000` : `#ffffff`); continue; }
    if (style === `ega`) { set(i, nearest(h, EGA16)); continue; }
    // Winbows 95: shade the bottom-right edge of each color area
    const edge = at(i, 1, 0) !== h || at(i, 0, 1) !== h;
    set(i, nearest(edge && h !== `#ffffff` ? shade(h, -0.4) : h, VGA16));
  }
  x.setTransform(1, 0, 0, 1, 0, 0); x.putImageData(out, 0, 0);
  return cv.toDataURL();
}

// recent eras: real vectors
function vectorIcon(ic, style) {
  let defs = ``, body = ``, n = 0;
  const grad = (c, top, bot, diag) => { const id = `g${n++}`; defs += `<linearGradient id="${id}" x1="0" y1="0" x2="${diag ? 1 : 0}" y2="1"><stop offset="0" stop-color="${shade(c, top)}"/><stop offset="1" stop-color="${shade(c, bot)}"/></linearGradient>`; return `url(#${id})`; };
  if (style === `xp`) {
    body = ic.L.map(([role, d, sw, off]) => {
      const c = roleColor(ic, role), t = off ? ` transform="translate(${off[0]} ${off[1]})"` : ``;
      return sw ? `<path d="${d}" fill="none" stroke="${shade(c, -0.15)}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${t}/>`
        : `<path d="${d}" fill="${grad(c, 0.45, -0.2)}" stroke="${shade(c, -0.5)}" stroke-width=".55" stroke-linejoin="round"${t}/>`;
    }).join(``);
    body += `<ellipse cx="7" cy="4" rx="6" ry="3" fill="#fff" opacity=".18"/>`;
  } else if (style === `ios`) {
    // iPhone OS 1: a small color picture on a glossy tile, pale for dark glyphs and dark for pale ones
    const tile = lum(ic.a) > 0.6 ? shade(ic.a, -0.6) : shade(ic.a, 0.8);
    body = `<rect width="16" height="16" rx="3.6" fill="${grad(tile, 0.25, -0.2)}"/><g transform="translate(2.2 2.2) scale(.725)">` + ic.L.map(([role, d, sw, off]) => {
      const c = roleColor(ic, role), t = off ? ` transform="translate(${off[0]} ${off[1]})"` : ``;
      return sw ? `<path d="${d}" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${t}/>` : `<path d="${d}" fill="${role === `w` ? `#ffffff` : grad(c, 0.35, -0.15)}"${t}/>`;
    }).join(``) + `</g><path d="M0 3.6A3.6 3.6 0 0 1 3.6 0H12.4A3.6 3.6 0 0 1 16 3.6V7C11 8.5 5 8.5 0 7Z" fill="#fff" opacity=".28"/>`;
  } else {
    // Winbows 12: flat, soft diagonal gradients, no outline
    body = ic.L.map(([role, d, sw, off]) => {
      const c = roleColor(ic, role), t = off ? ` transform="translate(${off[0]} ${off[1]})"` : ``;
      return sw ? `<path d="${d}" fill="none" stroke="${shade(c, 0.1)}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"${t}/>`
        : `<path d="${d}" fill="${role === `w` ? `#ffffff` : grad(c, 0.3, -0.05, 1)}"${t}/>`;
    }).join(``);
  }
  return `data:image/svg+xml,` + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="64" height="64"><defs>${defs}</defs>${body}</svg>`);
}

const iconCache = {};
function iconUrl(name, style) {
  const key = name + style;
  if (!iconCache[key]) { const ic = ICONS[name] || ICONS.window; iconCache[key] = [`mac`, `ega`, `w95`].includes(style) ? pixelIcon(ic, style) : vectorIcon(ic, style); }
  return iconCache[key];
}
const recoded = id => S.era === 6 && (id === `ai` || !!(S.x.rc && S.x.rc[id]));
function iconName(id) { const f = ICON_OF[id]; return typeof f === `function` ? f(S.era, recoded(id)) : f || `window`; }
const iconStyle = id => [, `mac`, `ega`, `w95`, `xp`, `ios`][S.era] || (recoded(id) ? `w11` : `xp`);
function icon(id) { const st = iconStyle(id); return `<i class="ico ${st}" style="background-image:url('${iconUrl(iconName(id), st)}')"></i>`; }
