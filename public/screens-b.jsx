// Mobile screens B: Journal, Audio ID, Community feed, Quiz, Danger check

function JournalScreen({ imgStyle }) {
  const entries = [
    { n: 'Monarch Butterfly', d: 'Today · Backyard', pct: 94, badge: 'NEW' },
    { n: 'Common Ladybug', d: 'Tue · Garden', pct: 99 },
    { n: 'Bumble Bee', d: 'Mon · Park', pct: 91 },
    { n: 'Garden Spider', d: 'Apr 28 · Trail', pct: 87 },
    { n: 'Praying Mantis', d: 'Apr 22 · Field', pct: 93 },
    { n: 'Dragonfly', d: 'Apr 19 · Pond', pct: 96 },
  ];
  return (
    <ScreenShell bg="var(--paper-2)">
      <Header
        title="My Journal"
        sub="34 species collected"
        big
        right={<button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.search} size={18} color="var(--ink)"/></button>}
      />
      <div style={{ padding: '0 18px' }}>
        {/* Streak + level */}
        <div style={{ display: 'flex', gap: 10 }}>
          <div className="card" style={{ flex: 1, padding: 12, background: 'var(--sun)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Glyph d={ICONS.flame} size={16} color="var(--coral-deep)"/>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Streak</span>
            </div>
            <div className="display" style={{ fontSize: 28, marginTop: 4 }}>7 days</div>
            <div className="dotrow" style={{ marginTop: 8 }}>
              {[1,1,1,1,1,1,1,0].map((d, i) => (
                <div key={i} className={`dot ${d ? 'on' : ''}`} style={{ width: 12, height: 12, borderRadius: 4 }}/>
              ))}
            </div>
          </div>
          <div className="card" style={{ flex: 1, padding: 12, background: 'var(--lime)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Glyph d={ICONS.trophy} size={16} color="var(--ink)"/>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Level</span>
            </div>
            <div className="display" style={{ fontSize: 28, marginTop: 4 }}>Naturalist</div>
            <div className="bar" style={{ height: 8, marginTop: 8 }}><i style={{ width: '68%', background: 'var(--ink)' }}/></div>
            <div className="mono" style={{ fontSize: 10, marginTop: 4, color: 'var(--ink-2)' }}>340 / 500 XP</div>
          </div>
        </div>

        {/* filter */}
        <div style={{ display: 'flex', gap: 8, marginTop: 14, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {['All', 'Butterflies', 'Beetles', 'Bees', 'Spiders', 'Other'].map((t, i) => (
            <span key={t} className={`chip ${i === 0 ? 'chip--ink' : ''}`} style={{ flex: '0 0 auto', height: 30 }}>{t}</span>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 14
        }}>
          {entries.map((e, i) => (
            <div key={e.n} className="card card--soft" style={{ padding: 0, borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <Ph label={e.n.toUpperCase().replace(/ /g, '_')} style={imgStyle} h={120} br={0}/>
                {e.badge && (
                  <div style={{ position: 'absolute', top: 8, left: 8 }}>
                    <span className="chip chip--coral" style={{ height: 22, fontSize: 10 }}>{e.badge}</span>
                  </div>
                )}
                <div style={{ position: 'absolute', bottom: 8, right: 8 }}>
                  <span className="chip" style={{ height: 22, fontSize: 10, background: 'oklch(0 0 0 / 0.7)', color: 'var(--paper)', borderColor: 'transparent' }}>
                    {e.pct}%
                  </span>
                </div>
              </div>
              <div style={{ padding: '8px 10px 10px' }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{e.n}</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 2 }}>{e.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 80 }}/>
      </div>
      <TabBar active="journal"/>
    </ScreenShell>
  );
}

function AudioScreen({ imgStyle }) {
  return (
    <ScreenShell bg="var(--ink)" topPad={56}>
      <Header
        title={<span style={{ color: 'var(--paper)' }}>Listening…</span>}
        sub={<span style={{ color: 'oklch(0.85 0 0 / 0.7)' }}>Hold still · 6 seconds</span>}
        big
        left={<button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.arrow_l} size={18} color="var(--ink)"/></button>}
      />
      <div style={{ padding: '0 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Big waveform */}
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: 220, position: 'relative'
        }}>
          {/* concentric rings */}
          {[0, 1, 2].map(n => (
            <div key={n} className="pulse" style={{
              position: 'absolute',
              width: 160 + n * 60, height: 160 + n * 60,
              borderRadius: '50%',
              border: '1.5px solid var(--lime)',
              opacity: 0.3 - n * 0.08,
              animationDelay: `${n * 0.4}s`,
            }}/>
          ))}
          <div style={{
            width: 140, height: 140, borderRadius: '50%',
            background: 'var(--lime)', border: '3px solid var(--paper)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 0 6px var(--ink)',
          }}>
            <Glyph d={ICONS.audio} size={48} color="var(--ink)"/>
          </div>
        </div>

        {/* Waveform bars */}
        <div style={{
          height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 4, padding: '0 8px',
        }}>
          {Array.from({ length: 32 }).map((_, i) => {
            const heights = [40, 70, 30, 90, 50, 80, 35, 65, 45, 75, 25, 95, 55, 70, 40, 85];
            const h = heights[i % heights.length];
            return (
              <div key={i} className="wave-bar" style={{
                height: `${h}%`,
                background: 'var(--lime)',
                animationDelay: `${(i * 60) % 800}ms`,
              }}/>
            );
          })}
        </div>

        {/* Top match */}
        <div className="card" style={{ marginTop: 16, padding: 14, background: 'var(--paper)' }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>provisional match · 3.2s</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 6 }}>
            <Ph label="CRICKET" style={imgStyle} h={56} w={56} br={12}/>
            <div style={{ flex: 1 }}>
              <div className="display" style={{ fontSize: 18 }}>Snowy Tree Cricket</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-2)', fontStyle: 'italic' }}>Oecanthus fultoni</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                <span className="chip chip--sky" style={{ height: 22, fontSize: 10 }}>~62°F</span>
                <span className="chip" style={{ height: 22, fontSize: 10 }}>~3kHz</span>
              </div>
            </div>
            <ConfDonut pct={88} size={56}/>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 14, paddingBottom: 24 }}>
          <button className="btn btn--ghost btn--lg" style={{ flex: 1, background: 'oklch(1 0 0 / 0.1)', color: 'var(--paper)', borderColor: 'var(--paper)' }}>Stop</button>
          <PillBtn kind="lime" icon={ICONS.check}>Save match</PillBtn>
        </div>
      </div>
    </ScreenShell>
  );
}

function CommunityScreen({ imgStyle }) {
  const posts = [
    { who: 'Mira', avatar: 'M', tint: 'var(--coral)', when: '2m', loc: 'Mt. Tam · CA', sp: 'California Sister', cap: 'Spotted three of these on the same oak — wings barely chipped.', likes: 42, com: 7, tags: ['Pollinator', 'Native'] },
    { who: 'Devraj', avatar: 'D', tint: 'var(--sky)', when: '24m', loc: 'Pune · IN', sp: 'Atlas Moth', cap: 'Came to the porch light. The wingspan is unreal.', likes: 218, com: 31, tags: ['Nocturnal', 'Rare'] },
    { who: 'Lola', avatar: 'L', tint: 'var(--plum)', when: '1h', loc: 'Hampstead · UK', sp: 'Stag Beetle', cap: 'My kid found this gentle giant. Released after photo.', likes: 88, com: 12, tags: ['Endangered'] },
  ];
  return (
    <ScreenShell bg="var(--paper-2)">
      <Header
        title="Field Feed"
        sub="Live sightings near you"
        big
        right={
          <div className="seg">
            <button className="is-on">Near</button>
            <button>World</button>
            <button>Friends</button>
          </div>
        }
      />
      <div style={{ padding: '0 18px' }}>
        {/* live banner */}
        <div className="card" style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: 10,
          background: 'var(--lime)', marginBottom: 12,
        }}>
          <span className="pulse" style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--coral-deep)' }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>4 new sightings within 2 mi</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>last update · 30s ago</div>
          </div>
          <button className="btn btn--icon" style={{ background: 'var(--paper)', borderColor: 'var(--ink)' }}>
            <Glyph d={ICONS.map} size={18} color="var(--ink)"/>
          </button>
        </div>

        {posts.map((p, i) => (
          <div key={i} className="card" style={{ padding: 0, marginBottom: 14, overflow: 'hidden' }}>
            {/* header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px' }}>
              <div className="avatar" style={{ background: p.tint, color: 'var(--paper)' }}>{p.avatar}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{p.who} <span style={{ color: 'var(--ink-3)', fontWeight: 500 }}>spotted a</span> {p.sp}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{p.loc} · {p.when}</div>
              </div>
              <button className="btn btn--icon" style={{ width: 32, height: 32, background: 'var(--paper)' }}>
                <Glyph d={ICONS.plus} size={14} color="var(--ink)"/>
              </button>
            </div>

            {/* photo */}
            <div style={{ position: 'relative' }}>
              <Ph label={p.sp.toUpperCase().replace(/ /g, '_')} style={imgStyle} h={200} br={0}/>
              <div style={{ position: 'absolute', bottom: 8, left: 8, display: 'flex', gap: 6 }}>
                {p.tags.map(t => <span key={t} className="chip" style={{ height: 22, fontSize: 10, background: 'oklch(1 0 0 / 0.92)', borderColor: 'var(--ink)' }}>{t}</span>)}
              </div>
            </div>

            {/* caption */}
            <div style={{ padding: '10px 12px' }}>
              <div style={{ fontSize: 13, lineHeight: 1.4 }}>{p.cap}</div>
              <div style={{ display: 'flex', gap: 14, marginTop: 8, alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700 }}>
                  <Glyph d={ICONS.heart} size={16} color="var(--coral-deep)"/> {p.likes}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 700 }}>
                  <Glyph d={ICONS.feed} size={16} color="var(--ink-2)"/> {p.com}
                </div>
                <span className="chip" style={{ marginLeft: 'auto', height: 22, fontSize: 10 }}>+12 XP</span>
              </div>
            </div>
          </div>
        ))}
        <div style={{ height: 80 }}/>
      </div>
      <TabBar active="feed"/>
    </ScreenShell>
  );
}

function QuizScreen({ imgStyle }) {
  return (
    <ScreenShell bg="var(--paper-2)">
      <Header
        title="Daily Quiz"
        sub="Question 3 of 5 · Bug Buster series"
        big
        left={<button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.x} size={18} color="var(--ink)"/></button>}
        right={
          <div className="chip chip--sun" style={{ height: 30 }}>
            <Glyph d={ICONS.flame} size={14} color="var(--ink)"/>
            <span>+30 XP</span>
          </div>
        }
      />
      <div style={{ padding: '0 18px' }}>
        {/* progress */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
          {[1,1,1,0,0].map((d, i) => (
            <div key={i} style={{
              flex: 1, height: 8, borderRadius: 4,
              background: d ? 'var(--lime)' : 'var(--paper)',
              border: '1.5px solid var(--ink)'
            }}/>
          ))}
        </div>

        {/* Question card */}
        <div className="card" style={{ padding: 0 }}>
          <div style={{ padding: '14px 16px', borderBottom: '1.5px solid var(--ink)', background: 'var(--sky)' }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>WHICH ONE IS A...</div>
            <div className="display" style={{ fontSize: 22, marginTop: 4 }}>Real bee?</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>Two of these are flies that mimic bees. Tap the genuine bee.</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: 14 }}>
            {[
              { l: 'OPTION_A', tag: 'A' },
              { l: 'OPTION_B', tag: 'B', selected: true },
              { l: 'OPTION_C', tag: 'C' },
              { l: 'OPTION_D', tag: 'D' },
            ].map(o => (
              <div key={o.tag} style={{
                position: 'relative',
                borderRadius: 14,
                border: o.selected ? '2.5px solid var(--lime-deep)' : '1.5px solid var(--ink)',
                overflow: 'hidden',
                boxShadow: o.selected ? '3px 3px 0 0 var(--lime-deep)' : '2px 2px 0 0 var(--ink)',
              }}>
                <Ph label={o.l} style={imgStyle} h={110} br={0}/>
                <div style={{
                  position: 'absolute', top: 6, left: 6,
                  width: 24, height: 24, borderRadius: '50%',
                  background: o.selected ? 'var(--lime)' : 'var(--paper)',
                  border: '1.5px solid var(--ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 12,
                }}>
                  {o.tag}
                </div>
                {o.selected && (
                  <div style={{ position: 'absolute', top: 6, right: 6 }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: 'var(--lime-deep)', border: '1.5px solid var(--ink)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Glyph d={ICONS.check} size={14} color="var(--paper)"/>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hint */}
        <div className="card card--soft" style={{ marginTop: 14, padding: 12, borderRadius: 14, background: 'var(--paper)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 18 }}>💡</div>
            <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>
              <b>Hint:</b> Bees have two pairs of wings; flies have one. Look for the back wing.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 18, paddingBottom: 24 }}>
          <button className="btn btn--ghost btn--lg" style={{ flex: 1 }}>Skip</button>
          <PillBtn kind="lime" icon={ICONS.arrow_r}>Submit answer</PillBtn>
        </div>
      </div>
      <TabBar active="quiz"/>
    </ScreenShell>
  );
}

function DangerScreen({ imgStyle }) {
  return (
    <ScreenShell bg="var(--coral)" topPad={56}>
      <div style={{ padding: '0 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.arrow_l} size={18} color="var(--ink)"/></button>
          <div className="ribbon" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>safety check</div>
          <div style={{ width: 44 }}/>
        </div>

        {/* Big verdict card */}
        <div className="card" style={{ padding: 18, position: 'relative' }}>
          <Ph label="SUBJECT · cropped" style={imgStyle} h={140} br={14}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 14 }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'var(--coral)', border: '2.5px solid var(--ink)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '3px 3px 0 0 var(--ink)',
            }}>
              <span style={{ fontSize: 32 }}>⚠</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>danger level</div>
              <div className="display" style={{ fontSize: 30, color: 'var(--coral-deep)' }}>Caution</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-2)' }}>can sting if disturbed</div>
            </div>
          </div>

          {/* meter */}
          <div style={{ marginTop: 14 }}>
            <div className="meter">
              <i className="on safe"/>
              <i className="on safe"/>
              <i className="on"/>
              <i className="on"/>
              <i/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
              <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>harmless</span>
              <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>medical</span>
            </div>
          </div>

          {/* species */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14, padding: 10, background: 'var(--paper-2)', borderRadius: 12 }}>
            <BugGlyph size={28} color="var(--sun)"/>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>European Hornet</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', fontStyle: 'italic' }}>Vespa crabro · 96% match</div>
            </div>
            <span className="chip chip--ink" style={{ height: 22, fontSize: 10 }}>Stinger</span>
          </div>
        </div>

        {/* Do / Don't */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 14 }}>
          <div className="card" style={{ padding: 12, background: 'var(--lime)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Glyph d={ICONS.check} size={16} color="var(--ink)"/>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Do</span>
            </div>
            <ul style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 12, lineHeight: 1.5 }}>
              <li>Stay calm, back away slowly</li>
              <li>Cover food and drinks</li>
              <li>Keep pets at distance</li>
            </ul>
          </div>
          <div className="card" style={{ padding: 12, background: 'var(--paper)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Glyph d={ICONS.x} size={16} color="var(--coral-deep)"/>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Don't</span>
            </div>
            <ul style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 12, lineHeight: 1.5 }}>
              <li>Swat or wave at them</li>
              <li>Block flight paths</li>
              <li>Disturb the nest</li>
            </ul>
          </div>
        </div>

        {/* If stung */}
        <div className="card" style={{ marginTop: 12, padding: 12 }}>
          <div className="display" style={{ fontSize: 16 }}>If stung</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
            {[
              { n: '1', t: 'Move away' },
              { n: '2', t: 'Wash with soap' },
              { n: '3', t: 'Cold compress' },
              { n: '4', t: 'Watch for allergy' },
            ].map(s => (
              <div key={s.n} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{
                  margin: '0 auto', width: 32, height: 32, borderRadius: '50%',
                  background: 'var(--sun)', border: '1.5px solid var(--ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 14,
                }}>{s.n}</div>
                <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6, lineHeight: 1.2 }}>{s.t}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 14, paddingBottom: 30 }}>
          <PillBtn kind="lime" icon={ICONS.book}>Save & learn more</PillBtn>
          <button className="btn btn--icon" style={{ background: 'var(--paper)' }}><Glyph d={ICONS.share} size={18} color="var(--ink)"/></button>
        </div>
      </div>
    </ScreenShell>
  );
}

Object.assign(window, { JournalScreen, AudioScreen, CommunityScreen, QuizScreen, DangerScreen });
