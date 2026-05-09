// Common UI atoms for Insect Identifier — placeholders, glyphs, badges
// Globally exported at the bottom for cross-script use.

const IMG_STYLES = ['photo', 'illo', 'specimen'];

function Ph({ label, style = 'photo', children, h = 200, w, br = 16, className = '' }) {
  return (
    <div
      className={`ph ph--${style} ${className}`}
      style={{ width: w || '100%', height: h, borderRadius: br }}
    >
      <span className="ph-label">{label}</span>
      {children}
    </div>
  );
}

// Tiny abstract bug glyph — neutral placeholder, not real species art
function BugGlyph({ size = 22, color = 'currentColor', stroke = 1.6 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="13" rx="5" ry="7" fill={color} stroke="var(--ink)" strokeWidth={stroke}/>
      <line x1="12" y1="6" x2="12" y2="20" stroke="var(--ink)" strokeWidth={stroke}/>
      <path d="M7 9 L3 6 M7 13 L2 13 M7 17 L3 20 M17 9 L21 6 M17 13 L22 13 M17 17 L21 20" stroke="var(--ink)" strokeWidth={stroke} strokeLinecap="round"/>
      <path d="M10 5 L8 2 M14 5 L16 2" stroke="var(--ink)" strokeWidth={stroke} strokeLinecap="round"/>
      <circle cx="10" cy="10" r="0.9" fill="var(--ink)"/>
      <circle cx="14" cy="10" r="0.9" fill="var(--ink)"/>
    </svg>
  );
}

function Glyph({ d, size = 20, color = 'currentColor', stroke = 1.8, fill = 'none' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d={d}/>
    </svg>
  );
}

const ICONS = {
  camera: 'M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
  spark: 'M12 3v4 M12 17v4 M3 12h4 M17 12h4 M5.5 5.5l2.8 2.8 M15.7 15.7l2.8 2.8 M5.5 18.5l2.8-2.8 M15.7 8.3l2.8-2.8',
  book: 'M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z',
  map: 'M9 4l-5 2v14l5-2 6 2 5-2V4l-5 2-6-2zM9 4v14M15 6v14',
  audio: 'M3 10v4 M7 7v10 M11 4v16 M15 8v8 M19 11v2',
  feed: 'M4 5h16 M4 12h16 M4 19h10',
  trophy: 'M7 4h10v3a5 5 0 0 1-10 0zM5 6H3v2a3 3 0 0 0 3 3 M19 6h2v2a3 3 0 0 1-3 3 M9 14h6v3H9z M8 20h8',
  heart: 'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z',
  shield: 'M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z',
  check: 'M5 12l5 5 9-11',
  x: 'M6 6l12 12 M18 6L6 18',
  search: 'M11 4a7 7 0 1 1 0 14 7 7 0 0 1 0-14z M21 21l-5-5',
  flame: 'M12 3s4 4 4 8a4 4 0 0 1-8 0c0-2 1-3 1-3s-3-1-3-4c0 0 6-1 6-1z',
  arrow_r: 'M5 12h14 M13 6l6 6-6 6',
  arrow_l: 'M19 12H5 M11 6l-6 6 6 6',
  plus: 'M12 5v14 M5 12h14',
  share: 'M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6 M16 6l-4-4-4 4 M12 2v14',
  leaf: 'M4 20c0-9 7-16 16-16-1 8-7 16-16 16zM4 20l8-8',
  calendar: 'M5 6h14v14H5z M5 10h14 M9 4v4 M15 4v4',
  drop: 'M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z',
  sun: 'M12 4v3 M12 17v3 M4 12h3 M17 12h3 M6 6l2 2 M16 16l2 2 M6 18l2-2 M16 8l2-2 M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zM12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
};

// Confidence donut (animated arc)
function ConfDonut({ pct = 92, size = 72, label, color = 'var(--lime-deep)' }) {
  const r = size / 2 - 6;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="var(--paper)" stroke="var(--line)" strokeWidth="6"/>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color}
          strokeWidth="6" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off}
          transform={`rotate(-90 ${size/2} ${size/2})`}/>
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', lineHeight: 1
      }}>
        <span className="display" style={{ fontSize: size * 0.34 }}>{pct}<span style={{ fontSize: size * 0.18 }}>%</span></span>
        {label && <span className="mono" style={{ fontSize: 9, color: 'var(--ink-3)', marginTop: 2 }}>{label}</span>}
      </div>
    </div>
  );
}

// Status bar that auto-injects iOS-safe top padding inside content
function ScreenShell({ children, bg = 'var(--paper-2)', topPad = 56 }) {
  return (
    <div className="app" style={{ background: bg, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ height: topPad, flex: '0 0 auto' }}/>
      <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}

// Tab bar
function TabBar({ active = 'home' }) {
  const items = [
    { id: 'home', label: 'Scan', icon: ICONS.camera },
    { id: 'journal', label: 'Journal', icon: ICONS.book },
    { id: 'feed', label: 'Feed', icon: ICONS.feed },
    { id: 'quiz', label: 'Learn', icon: ICONS.trophy },
    { id: 'me', label: 'Me', icon: ICONS.heart },
  ];
  return (
    <div className="tabbar" style={{ paddingBottom: 28 }}>
      {items.map(it => (
        <div key={it.id} className={`tabbar-item ${active === it.id ? 'is-active' : ''}`}>
          <div className="tabbar-glyph">
            <Glyph d={it.icon} size={20} color="var(--ink)"/>
          </div>
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

// Header bar (in-screen, below status bar)
function Header({ title, sub, left, right, big }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: big ? '4px 18px 12px' : '4px 18px 8px', gap: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
        {left}
        <div style={{ minWidth: 0 }}>
          <div className="display" style={{ fontSize: big ? 28 : 18 }}>{title}</div>
          {sub && <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{sub}</div>}
        </div>
      </div>
      {right}
    </div>
  );
}

// Big pill round button
function PillBtn({ children, kind = 'lime', icon, ...rest }) {
  return (
    <button className={`btn btn--${kind} btn--lg`} {...rest}>
      {icon && <Glyph d={icon} size={18} color="var(--ink)"/>}
      {children}
    </button>
  );
}

// Tiny stat pill
function Stat({ value, label, tint = 'var(--paper)' }) {
  return (
    <div style={{
      flex: 1, padding: '10px 12px', borderRadius: 14,
      border: '1.5px solid var(--ink)', background: tint,
      boxShadow: '2px 2px 0 0 var(--ink)',
    }}>
      <div className="display" style={{ fontSize: 22 }}>{value}</div>
      <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-2)' }}>{label}</div>
    </div>
  );
}

Object.assign(window, {
  IMG_STYLES, Ph, BugGlyph, Glyph, ICONS, ConfDonut, ScreenShell, TabBar, Header, PillBtn, Stat,
});
