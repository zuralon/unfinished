// Smoke test for the current era. TEST tab only: fetch('tools/smoke.js').then(r => r.text()).then(eval)
(() => {
  noSave = true;
  const errs = [];
  const run = f => { try { f(); } catch (e) { errs.push(e.message + ' @ ' + (e.stack || '').split('\n')[1]); } };
  S.px = 1e20; S.total = 1e20;
  for (const p of E().P) if (p.cost) run(() => act('buy:' + p.id));
  for (const p of E().PA) run(() => act('pat:' + p.id));
  for (const t of E().HW) for (const s of t.s) run(() => act('hw:' + t.r));
  for (let i = 0; i < 3; i++) run(() => act('tab:' + i));
  run(() => { for (let i = 0; i < 50; i++) { E().tick && E().tick(5); deskRender(); } });
  for (const p of E().P) if (S.run[p.id] && !p.fixed) run(() => { act('close:' + p.id); act('close:' + p.id); act('close:' + p.id); });
  for (const p of E().P) if (S.bought[p.id]) run(() => act('open:' + p.id));
  for (const m of ['file', 'edit', 'help', 'start']) run(() => MENU[m](U()));
  run(() => act('lang')); run(() => render()); run(() => act('lang'));
  run(() => { S.hackCd = 0; act('hack'); if (H) act('hg:' + H.pass); });
  run(() => { for (let i = 0; i < 20 && document.getElementById('dlg').classList.contains('on'); i++) act('dlgOk'); });
  run(() => { for (let i = 0; i < 30; i++) tick(); });
  run(() => { fragTick(500); strayTick(60); strayTick(0.1); catchStray({ clientX: 10, clientY: 10 }); });
  run(() => checkAch());
  return JSON.stringify({ era: S.era, errs, ach: S.ach.length, ps: fmt(perSec()) });
})()
