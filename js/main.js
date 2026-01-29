/** PA JS - Belém - Vibrant-tropical with red-orange tones */
const STATE_CONFIG = {
  stateCode: 'pa',
  capital: 'Belém',
  formspreeUrl: 'https://formspree.io/f/xpaqbddb',
  colors: { primary: '#ff6347', secondary: '#ff8c00', accent: '#ffa500' },
  animations: {"enabled": true, "header": {"type": "amazonSlide", "duration": "0.8s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "rainforestReveal", "duration": "1.2s", "easing": "ease-in-out", "stagger": "0.2s"}, "hero": {"type": "jungleParallax", "speed": 0.5, "direction": "multi"}, "cards": {"type": "leafFloat", "organic": true, "sway": true}, "images": {"type": "canopyReveal", "layers": 3, "duration": "1.3s"}},
  interactions: {"hover": "leaf-rustle", "scroll": "canopy-flow", "transitions": "jungle-ease", "click": "branch-snap"},
  premiumEffects: ["rainforest-gradient", "leaf-particles", "canopy-shadows", "mist-layers"]
};

const SECTIONS = ["pa-index-section--map", "pa-index-section-frequently-asked-questions-about-living-in-", "pa-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
