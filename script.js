// KROM KONSALTING — interactivity

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- nav: shrink shadow + mobile toggle ---------- */
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- scroll reveal ---------- */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (prefersReducedMotion) {
  revealEls.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
}

/* ---------- hero console typing animation ---------- */
const consoleBody = document.getElementById('consoleBody');

const consoleLines = [
  { text: '$ krom-monitor --check-status', cls: 'prompt', pause: 300 },
  { text: 'Provjeravam Oracle instance ...', cls: 'comment', pause: 350 },
  { text: '  DB_PROD_01      ONLINE     latency 4ms', cls: 'ok', pause: 180 },
  { text: '  DB_PROD_02      ONLINE     latency 6ms', cls: 'ok', pause: 180 },
  { text: '  APEX_APP_SRV    ONLINE     load 12%', cls: 'ok', pause: 180 },
  { text: '  BACKUP_JOB      OK         zadnji: 03:00h', cls: 'ok', pause: 350 },
  { text: '', cls: '', pause: 200 },
  { text: '$ krom-monitor --uptime', cls: 'prompt', pause: 300 },
  { text: 'Dostupnost sistema: 24/7 nadzor aktivan', cls: 'comment', pause: 500 },
];

function typeConsole() {
  if (prefersReducedMotion) {
    consoleBody.innerHTML = consoleLines
      .map(l => `<div class="${l.cls}">${l.text}</div>`)
      .join('');
    return;
  }

  let lineIndex = 0;

  function nextLine() {
    if (lineIndex >= consoleLines.length) {
      // restart the loop after a pause, keeping it ambient rather than a one-shot gimmick
      setTimeout(() => {
        consoleBody.innerHTML = '';
        lineIndex = 0;
        nextLine();
      }, 2600);
      return;
    }

    const line = consoleLines[lineIndex];
    const div = document.createElement('div');
    div.className = line.cls;
    consoleBody.appendChild(div);

    let charIndex = 0;
    const speed = line.cls === 'prompt' ? 28 : 10;

    function typeChar() {
      if (charIndex < line.text.length) {
        div.textContent = line.text.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        lineIndex++;
        setTimeout(nextLine, line.pause);
      }
    }
    typeChar();
  }

  nextLine();
}

// start once the console is in view
const consoleEl = document.querySelector('.console');
if (consoleEl) {
  const consoleIo = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeConsole();
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  consoleIo.observe(consoleEl);
}
