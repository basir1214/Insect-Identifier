// Tweaks panel — imagery style switcher

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "imgStyle": "photo"
}/*EDITMODE-END*/;

function BuggyTweaks({ children }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  // Re-render of children driven by tweakchange event listener inside App
  return (
    <TweaksPanel title="Tweaks" subtitle="Imagery style for placeholders">
      <TweakSection label="Imagery placeholder">
        <TweakRadio
          label="Style"
          value={t.imgStyle}
          options={[
            { value: 'photo', label: 'Photo' },
            { value: 'illo', label: 'Illo' },
            { value: 'specimen', label: 'Spec.' },
          ]}
          onChange={(v) => setTweak('imgStyle', v)}
        />
        <div style={{ marginTop: 8, fontSize: 11, color: '#888' }}>
          Drop in real photos to replace placeholders. Style sets the placeholder fallback look.
        </div>
      </TweakSection>
    </TweaksPanel>
  );
}

window.BuggyTweaks = BuggyTweaks;
window.TWEAK_DEFAULTS = TWEAK_DEFAULTS;
