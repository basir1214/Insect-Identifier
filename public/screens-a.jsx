// Mobile screens A: Home (camera), Scanning, Result, Species detail
// Each screen returns content for ScreenShell or ScreenShell wrapper.

function HomeScreen({ imgStyle }) {
  return (
    <div className="app" style={{ background: 'var(--ink)', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Camera viewfinder fills full frame */}
      <Ph label="CAMERA · live preview" style={imgStyle} h="100%" br={0} className="halftone" />
      {/* Top status bar dim background already shown by iOS frame */}
      {/* Top header */}
      <div style={{
        position: 'absolute', top: 56, left: 14, right: 14,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div className="chip chip--ink" style={{ height: 30 }}>
          <Glyph d={ICONS.flame} size={14} color="var(--sun)"/>
          <span>7-day streak</span>
        </div>
        <div className="chip" style={{ height: 30, background: 'var(--paper)', borderColor: 'var(--ink)' }}>
          <span className="mono" style={{ fontSize: 11 }}>34 / 50 species</span>
        </div>
      </div>

      {/* Center reticle */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ position: 'relative', width: 240, height: 240 }}>
          {/* corners */}
          {[
            { top: 0, left: 0, t: '0', l: '0', b: 'auto', r: 'auto' },
            { top: 0, right: 0 },
            { bottom: 0, left: 0 },
            { bottom: 0, right: 0 },
          ].map((p, i) => {
            const r = i === 0 ? '12px 0 0 0' : i === 1 ? '0 12px 0 0' : i === 2 ? '0 0 0 12px' : '0 0 12px 0';
            const bw = i === 0 ? '3px 0 0 3px' : i === 1 ? '3px 3px 0 0' : i === 2 ? '0 0 3px 3px' : '0 3px 3px 0';
            return (
              <div key={i} style={{
                position: 'absolute', width: 32, height: 32,
                borderColor: 'var(--lime)', borderStyle: 'solid', borderWidth: bw,
                borderRadius: r,
                ...p
              }}/>
            );
          })}
          <div className="scan-line" style={{ borderRadius: 12 }}/>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div className="chip chip--lime" style={{ height: 28 }}>
              <Glyph d={ICONS.spark} size={12} color="var(--ink)"/>
              <span className="mono">align bug here</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action area */}
      <div style={{
        position: 'absolute', bottom: 28, left: 0, right: 0,
        padding: '0 18px',
      }}>
        {/* mode segmented */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <div className="seg" style={{ background: 'oklch(0 0 0 / 0.4)', borderColor: 'transparent', backdropFilter: 'blur(8px)' }}>
            <button className="is-on" style={{ background: 'var(--lime)', color: 'var(--ink)' }}>Photo</button>
            <button style={{ color: 'var(--paper)' }}>Sound</button>
            <button style={{ color: 'var(--paper)' }}>Upload</button>
          </div>
        </div>
        {/* shutter row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button className="btn btn--icon" style={{ background: 'var(--paper)', borderColor: 'var(--ink)' }}>
            <Glyph d={ICONS.book} size={20} color="var(--ink)"/>
          </button>
          <div className="pulse" style={{
            width: 84, height: 84, borderRadius: '50%',
            background: 'var(--lime)', border: '3px solid var(--ink)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 0 0 var(--ink)',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              border: '3px solid var(--ink)', background: 'var(--paper)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Glyph d={ICONS.camera} size={26} color="var(--ink)"/>
            </div>
          </div>
          <button className="btn btn--icon" style={{ background: 'var(--paper)', borderColor: 'var(--ink)' }}>
            <Glyph d={ICONS.audio} size={20} color="var(--ink)"/>
          </button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10, color: 'var(--paper)', fontSize: 12, fontWeight: 600 }}>
          Tap to identify · Hold for video
        </div>
      </div>
    </div>
  );
}

function ScanScreen({ imgStyle }) {
  return (
    <ScreenShell bg="var(--paper-2)">
      <Header title="Identifying…" sub="Comparing 19,420 species" />
      <div style={{ padding: '8px 18px 0' }}>
        <div className="card" style={{ position: 'relative' }}>
          <Ph label="SUBJECT · uploaded" style={imgStyle} h={280} br={22}/>
          <div className="scan-line" style={{ borderRadius: 22 }}/>
          {/* corner marks */}
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <div className="chip chip--ink" style={{ height: 24 }}>
              <span className="mono" style={{ fontSize: 10 }}>● live</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '16px 18px' }}>
        {/* progress steps */}
        <div className="card" style={{ padding: 16, boxShadow: '3px 3px 0 0 var(--ink)' }}>
          <div className="display" style={{ fontSize: 16, marginBottom: 10 }}>What we're checking</div>
          {[
            { l: 'Wing pattern', s: 'done' },
            { l: 'Body segments', s: 'done' },
            { l: 'Antennae shape', s: 'live' },
            { l: 'Color & markings', s: 'wait' },
            { l: 'Habitat clues', s: 'wait' },
          ].map(s => (
            <div key={s.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px dashed var(--line)' }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                border: '1.5px solid var(--ink)',
                background: s.s === 'done' ? 'var(--lime)' : s.s === 'live' ? 'var(--sun)' : 'var(--paper-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {s.s === 'done' && <Glyph d={ICONS.check} size={12} color="var(--ink)"/>}
                {s.s === 'live' && <span className="pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ink)' }}/>}
              </div>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 600 }}>{s.l}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>
                {s.s === 'done' ? 'matched' : s.s === 'live' ? 'scanning' : 'queued'}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14 }}>
          <div className="bar" style={{ height: 12 }}><i style={{ width: '62%' }}/></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>62% · ~3s left</span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>4 candidates</span>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

function ResultScreen({ imgStyle }) {
  return (
    <ScreenShell bg="var(--paper-2)">
      <div style={{ padding: '0 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.arrow_l} size={18} color="var(--ink)"/></button>
          <div className="ribbon" style={{ background: 'var(--lime-deep)', color: 'var(--paper)' }}>match found</div>
          <button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.share} size={18} color="var(--ink)"/></button>
        </div>

        {/* Top match hero card */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <Ph label="HERO · top match photo" style={imgStyle} h={200} br={0} />
          <div style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>order · lepidoptera</div>
                <div className="display" style={{ fontSize: 26, marginTop: 4 }}>Monarch Butterfly</div>
                <div className="mono" style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 2, fontStyle: 'italic' }}>Danaus plexippus</div>
              </div>
              <ConfDonut pct={94} size={68} label="confidence"/>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
              <span className="chip chip--safe">
                <Glyph d={ICONS.shield} size={12} color="white"/> Harmless
              </span>
              <span className="chip chip--sky">Pollinator</span>
              <span className="chip chip--sun">Migratory</span>
              <span className="chip">+1 to journal</span>
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <Stat value="9–10cm" label="Wingspan" tint="var(--sun)"/>
          <Stat value="4,800km" label="Migrates" tint="var(--sky)"/>
          <Stat value="LC" label="IUCN" tint="var(--lime)"/>
        </div>

        {/* alternates */}
        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div className="display" style={{ fontSize: 18 }}>Other possibilities</div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>3 candidates</span>
          </div>
          {[
            { n: 'Viceroy', sci: 'Limenitis archippus', pct: 71, tint: 'var(--sun)' },
            { n: 'Queen Butterfly', sci: 'Danaus gilippus', pct: 58, tint: 'var(--coral)' },
            { n: 'Soldier Butterfly', sci: 'Danaus eresimus', pct: 33, tint: 'var(--sky)' },
          ].map(c => (
            <div key={c.n} className="card card--soft" style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: 10, marginTop: 10,
              borderRadius: 14
            }}>
              <Ph label={c.n.toUpperCase()} style={imgStyle} h={56} w={56} br={10}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{c.n}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', fontStyle: 'italic' }}>{c.sci}</div>
              </div>
              <div style={{ width: 60 }}>
                <div className="bar" style={{ height: 8 }}><i style={{ width: `${c.pct}%`, background: c.tint }}/></div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', textAlign: 'right', marginTop: 3 }}>{c.pct}%</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <PillBtn kind="lime" icon={ICONS.book}>Save to journal</PillBtn>
          <button className="btn btn--icon"><Glyph d={ICONS.x} size={18} color="var(--ink)"/></button>
        </div>
        <div style={{ height: 32 }}/>
      </div>
    </ScreenShell>
  );
}

function SpeciesScreen({ imgStyle }) {
  return (
    <ScreenShell bg="var(--paper-2)" topPad={0}>
      {/* hero */}
      <div style={{ position: 'relative' }}>
        <Ph label="SPECIES · hero photo" style={imgStyle} h={300} br={0}/>
        <div style={{ position: 'absolute', top: 56, left: 14, right: 14, display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.arrow_l} size={18} color="var(--ink)"/></button>
          <button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.heart} size={18} color="var(--ink)"/></button>
        </div>
        <div style={{ position: 'absolute', left: 14, right: 14, bottom: -28 }}>
          <div className="card" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="chip chip--lime">Lepidoptera</span>
              <span className="chip chip--sky">Nymphalidae</span>
            </div>
            <div className="display" style={{ fontSize: 24, marginTop: 8 }}>Monarch Butterfly</div>
            <div className="mono" style={{ fontSize: 12, color: 'var(--ink-2)', fontStyle: 'italic' }}>Danaus plexippus · Linnaeus, 1758</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '40px 18px 0' }}>
        {/* Quick facts grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { i: ICONS.leaf, l: 'Habitat', v: 'Meadows, gardens' },
            { i: ICONS.drop, l: 'Diet', v: 'Milkweed, nectar' },
            { i: ICONS.calendar, l: 'Active', v: 'Spring–Fall' },
            { i: ICONS.sun, l: 'Best at', v: 'Mid-day sun' },
          ].map(f => (
            <div key={f.l} className="card card--soft" style={{ padding: 12, borderRadius: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ink-2)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <Glyph d={f.i} size={14} color="var(--ink-2)"/> {f.l}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{f.v}</div>
            </div>
          ))}
        </div>

        {/* Lifecycle timeline */}
        <div className="card" style={{ marginTop: 16, padding: 14 }}>
          <div className="display" style={{ fontSize: 16 }}>Lifecycle</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, gap: 6 }}>
            {[
              { l: 'Egg', d: '4d', tint: 'var(--sun)' },
              { l: 'Larva', d: '14d', tint: 'var(--lime)' },
              { l: 'Pupa', d: '10d', tint: 'var(--sky)' },
              { l: 'Adult', d: '6w', tint: 'var(--coral)' },
            ].map((s, i, arr) => (
              <React.Fragment key={s.l}>
                <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: '50%',
                    background: s.tint, border: '1.5px solid var(--ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '2px 2px 0 0 var(--ink)'
                  }}>
                    <span className="display" style={{ fontSize: 14 }}>{i + 1}</span>
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, marginTop: 4 }}>{s.l}</div>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{s.d}</div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ flex: 1, height: 0, borderTop: '2px dashed var(--ink-2)', marginBottom: 24 }}/>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Range strip */}
        <div className="card" style={{ marginTop: 14, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '12px 14px', borderBottom: '1.5px solid var(--ink)' }}>
            <div className="display" style={{ fontSize: 16 }}>Range & migration</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>North America · winters in Mexico</div>
          </div>
          <Ph label="MAP · range overlay" style={imgStyle === 'specimen' ? 'specimen' : 'illo'} h={140} br={0}/>
        </div>

        {/* Did you know */}
        <div className="card" style={{
          marginTop: 14, padding: 14, background: 'var(--sun)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 22 }}>★</div>
            <div className="display" style={{ fontSize: 16 }}>Did you know?</div>
          </div>
          <div style={{ fontSize: 14, marginTop: 6, lineHeight: 1.4 }}>
            Monarchs taste milkweed with their feet — and use the toxins to become unpalatable to predators.
          </div>
        </div>

        <div style={{ height: 40 }}/>
      </div>
    </ScreenShell>
  );
}

Object.assign(window, { HomeScreen, ScanScreen, ResultScreen, SpeciesScreen });
