// Desktop dashboard — naturalist's collection workspace

function DesktopApp({ imgStyle }) {
  return (
    <div className="app desk" style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      {/* Top bar */}
      <div className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--lime)', border: '1.5px solid var(--ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '2px 2px 0 0 var(--ink)',
          }}>
            <BugGlyph size={20} color="var(--paper)"/>
          </div>
          <div className="display" style={{ fontSize: 22 }}>Buggy</div>
          <span className="chip" style={{ height: 22, fontSize: 10, marginLeft: 6 }}>v2.0 · field guide</span>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            width: 420, padding: '8px 14px',
            background: 'var(--paper-2)', borderRadius: 999,
            border: '1.5px solid var(--ink)',
          }}>
            <Glyph d={ICONS.search} size={16} color="var(--ink-2)"/>
            <span style={{ color: 'var(--ink-3)', fontSize: 13 }}>Search by name, latin, or trait — try "spotted wings"</span>
            <span className="mono" style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--ink-3)', padding: '2px 6px', border: '1px solid var(--line)', borderRadius: 4 }}>⌘K</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="chip chip--sun" style={{ height: 30 }}>
            <Glyph d={ICONS.flame} size={14} color="var(--ink)"/>
            <span>7-day streak</span>
          </div>
          <PillBtn kind="lime" icon={ICONS.camera}>New scan</PillBtn>
          <div className="avatar" style={{ width: 36, height: 36, background: 'var(--coral)', color: 'var(--paper)' }}>B</div>
        </div>
      </div>

      <div className="grid">
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Profile / level */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="avatar" style={{ width: 56, height: 56, fontSize: 22, background: 'var(--coral)', color: 'var(--paper)' }}>B</div>
              <div style={{ flex: 1 }}>
                <div className="display" style={{ fontSize: 20 }}>Basir</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>Naturalist · Lvl 7</div>
              </div>
              <span className="chip chip--lime" style={{ height: 26 }}>340 XP</span>
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="bar" style={{ height: 10 }}><i style={{ width: '68%' }}/></div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>160 XP to Field Naturalist</div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <Stat value="34" label="Species" tint="var(--lime)"/>
              <Stat value="127" label="Sightings" tint="var(--sun)"/>
              <Stat value="12" label="Badges" tint="var(--sky)"/>
            </div>
          </div>

          {/* Categories */}
          <div className="card card--soft" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
              <div className="display" style={{ fontSize: 16 }}>By order</div>
              <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>34 species</span>
            </div>
            {[
              { l: 'Lepidoptera', n: 11, c: 'var(--coral)' },
              { l: 'Coleoptera', n: 8, c: 'var(--sun)' },
              { l: 'Hymenoptera', n: 6, c: 'var(--lime)' },
              { l: 'Diptera', n: 4, c: 'var(--sky)' },
              { l: 'Odonata', n: 3, c: 'var(--plum)' },
              { l: 'Araneae', n: 2, c: 'var(--ink-2)' },
            ].map(o => {
              const pct = (o.n / 11) * 100;
              return (
                <div key={o.l} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{o.l}</div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{o.n}</div>
                  </div>
                  <div className="bar" style={{ height: 8 }}>
                    <i style={{ width: `${pct}%`, background: o.c }}/>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Badges */}
          <div className="card" style={{ padding: 16, background: 'var(--sun)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
              <div className="display" style={{ fontSize: 16 }}>Badges</div>
              <span className="chip chip--ink" style={{ height: 22, fontSize: 10 }}>3 NEW</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              {[
                { l: 'First scan', e: '🥇', on: true },
                { l: '7-day', e: '🔥', on: true },
                { l: 'Pollinator pal', e: '🌸', on: true },
                { l: 'Night owl', e: '🌙', on: true },
                { l: 'Stinger', e: '🐝', on: true, locked: false },
                { l: '50 species', e: '🏆', on: false },
                { l: 'Migrator', e: '🦋', on: false },
                { l: 'Rare find', e: '✨', on: false },
              ].map((b, i) => (
                <div key={i} style={{
                  aspectRatio: '1', borderRadius: 12,
                  background: b.on ? 'var(--paper)' : 'oklch(1 0 0 / 0.4)',
                  border: '1.5px solid var(--ink)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  opacity: b.on ? 1 : 0.5,
                  boxShadow: b.on ? '2px 2px 0 0 var(--ink)' : 'none',
                }}>
                  <div style={{ fontSize: 22, filter: b.on ? 'none' : 'grayscale(1)' }}>{b.e}</div>
                  <div style={{ fontSize: 9, fontWeight: 700, marginTop: 2, textAlign: 'center', lineHeight: 1.1 }}>{b.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CENTER COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Recent scan */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '0 0 280px', position: 'relative' }}>
                <Ph label="LATEST · MONARCH" style={imgStyle} h={280} br={0}/>
                <div style={{ position: 'absolute', top: 12, left: 12 }}>
                  <span className="chip chip--coral" style={{ height: 24 }}>JUST IDENTIFIED</span>
                </div>
              </div>
              <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>order · lepidoptera · nymphalidae</div>
                    <div className="display" style={{ fontSize: 32, marginTop: 4 }}>Monarch Butterfly</div>
                    <div className="mono" style={{ fontSize: 12, color: 'var(--ink-2)', fontStyle: 'italic', marginTop: 2 }}>Danaus plexippus · spotted today, 14:02 · Backyard</div>
                  </div>
                  <ConfDonut pct={94} size={84} label="match"/>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
                  <span className="chip chip--safe"><Glyph d={ICONS.shield} size={12} color="white"/> Harmless</span>
                  <span className="chip chip--sky">Pollinator</span>
                  <span className="chip chip--sun">Migratory</span>
                  <span className="chip chip--lime">+1 to journal</span>
                  <span className="chip">+30 XP</span>
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 16 }}>
                  <PillBtn kind="lime" icon={ICONS.book}>Open species</PillBtn>
                  <button className="btn">Compare alternates</button>
                  <button className="btn btn--ghost">Edit notes</button>
                </div>
              </div>
            </div>
          </div>

          {/* Map of sightings */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1.5px solid var(--ink)' }}>
              <div>
                <div className="display" style={{ fontSize: 18 }}>Where you've spotted bugs</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>127 sightings · 9 locations</div>
              </div>
              <div className="seg">
                <button className="is-on">Map</button>
                <button>Calendar</button>
                <button>Heat</button>
              </div>
            </div>
            <div style={{ position: 'relative', height: 260 }}>
              <Ph label="MAP · world basemap with pins" style={imgStyle === 'specimen' ? 'specimen' : 'illo'} h={260} br={0}/>
              {/* synthetic pins */}
              {[
                { x: 22, y: 60, c: 'var(--coral)', n: 11 },
                { x: 28, y: 52, c: 'var(--sun)', n: 4 },
                { x: 50, y: 38, c: 'var(--lime)', n: 7 },
                { x: 60, y: 50, c: 'var(--sky)', n: 3 },
                { x: 75, y: 60, c: 'var(--plum)', n: 9 },
                { x: 80, y: 70, c: 'var(--coral)', n: 2 },
              ].map((p, i) => (
                <div key={i} style={{
                  position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                }}>
                  <div className="pulse" style={{
                    width: 28 + p.n * 1.2, height: 28 + p.n * 1.2,
                    borderRadius: '50%', background: p.c, opacity: 0.4,
                    animationDelay: `${i * 0.2}s`,
                  }}/>
                  <div style={{
                    position: 'absolute',
                    width: 26, height: 26, borderRadius: '50%',
                    background: p.c, border: '1.5px solid var(--ink)',
                    color: 'var(--ink)', fontWeight: 800, fontSize: 11,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{p.n}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent journal */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
              <div className="display" style={{ fontSize: 18 }}>Recent journal entries</div>
              <button className="btn btn--ghost" style={{ padding: '6px 12px', fontSize: 12 }}>View all</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[
                { n: 'Common Ladybug', d: 'Tue', pct: 99 },
                { n: 'Bumble Bee', d: 'Mon', pct: 91 },
                { n: 'Garden Spider', d: 'Apr 28', pct: 87 },
                { n: 'Dragonfly', d: 'Apr 19', pct: 96 },
              ].map(e => (
                <div key={e.n} style={{ borderRadius: 12, overflow: 'hidden', border: '1.5px solid var(--ink)' }}>
                  <Ph label={e.n.toUpperCase().replace(/ /g, '_')} style={imgStyle} h={120} br={0}/>
                  <div style={{ padding: 10, background: 'var(--paper)' }}>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{e.n}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                      <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{e.d}</span>
                      <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{e.pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Daily quiz card */}
          <div className="card" style={{ padding: 16, background: 'var(--lime)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Glyph d={ICONS.trophy} size={18} color="var(--ink)"/>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Daily quiz · 5 left</span>
            </div>
            <div className="display" style={{ fontSize: 22 }}>Bee or fly?</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Two of these are mimics. Spot the real bee for 30 XP.</div>
            <PillBtn kind="sun" icon={ICONS.arrow_r} style={{ marginTop: 12 }}>Play now</PillBtn>
          </div>

          {/* Live feed */}
          <div className="card" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
              <div className="display" style={{ fontSize: 16 }}>Field feed</div>
              <span className="chip" style={{ height: 22, fontSize: 10 }}>
                <span className="pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--coral-deep)' }}/>
                live
              </span>
            </div>
            {[
              { who: 'Mira', a: 'M', tint: 'var(--coral)', sp: 'California Sister', loc: 'Mt. Tam', when: '2m' },
              { who: 'Devraj', a: 'D', tint: 'var(--sky)', sp: 'Atlas Moth', loc: 'Pune', when: '24m' },
              { who: 'Lola', a: 'L', tint: 'var(--plum)', sp: 'Stag Beetle', loc: 'Hampstead', when: '1h' },
              { who: 'Noor', a: 'N', tint: 'var(--lime)', sp: 'Robber Fly', loc: 'Austin', when: '2h' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < 3 ? '1px dashed var(--line)' : 'none' }}>
                <div className="avatar" style={{ background: p.tint, color: 'var(--paper)' }}>{p.a}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13 }}><b>{p.who}</b> spotted <b>{p.sp}</b></div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{p.loc} · {p.when}</div>
                </div>
                <Ph label="·" style={imgStyle} h={36} w={36} br={8}/>
              </div>
            ))}
          </div>

          {/* Conservation watch */}
          <div className="card" style={{ padding: 16 }}>
            <div className="display" style={{ fontSize: 16 }}>Conservation watch</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 12 }}>Species near you with declining trends</div>
            {[
              { n: 'Rusty-patched Bumble Bee', s: 'Endangered', c: 'var(--danger)', t: '−87%' },
              { n: 'Monarch Butterfly', s: 'Vulnerable', c: 'var(--coral)', t: '−22%' },
              { n: 'Karner Blue', s: 'Endangered', c: 'var(--danger)', t: '−74%' },
            ].map(c => (
              <div key={c.n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0' }}>
                <div style={{ width: 6, height: 36, borderRadius: 3, background: c.c }}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{c.n}</div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{c.s}</div>
                </div>
                <div className="mono" style={{ fontSize: 12, fontWeight: 700, color: c.c }}>{c.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: 24 }}/>
    </div>
  );
}

Object.assign(window, { DesktopApp });
