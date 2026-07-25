/* Puskal Kafle — Portfolio 2026 */
document.documentElement.classList.add('js');

(() => {
  /* ---------- lazy media: fade in + clear placeholder on load ---------- */
  document.querySelectorAll('.ph').forEach((el) => {
    const isVideo = el.tagName === 'VIDEO';
    const done = () => {
      el.classList.add('is-loaded');
      const box = el.closest('.media-ph');
      if (box) box.classList.add('is-loaded');
    };
    const ready = isVideo ? el.readyState >= 2 : el.complete && el.naturalWidth > 0;
    if (ready) { done(); return; }
    el.addEventListener(isVideo ? 'loadeddata' : 'load', done, { once: true });
    el.addEventListener('error', done, { once: true });
  });
})();

(() => {
  /* ---------- mobile menu ---------- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (nav && toggle) {
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.style.overflow = open ? 'hidden' : '';
      document.documentElement.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.querySelectorAll('.nav__links a').forEach((a) => {
      a.addEventListener('click', () => setOpen(false));
    });
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setOpen(false);
        toggle.focus(); /* return focus to the trigger, not lost to <body> */
      }
    });
  }

  /* ---------- nav: frosted when scrolled (always visible) ---------- */
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Kathmandu clock ---------- */
  const clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length) {
    const fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kathmandu', hour: '2-digit', minute: '2-digit', hour12: true,
    });
    const update = () => {
      clocks.forEach((c) => { c.textContent = `Kathmandu ${fmt.format(new Date())}`; });
    };
    update();
    setInterval(update, 30000);
  }

  /* ---------- year ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- scroll reveals ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in-view'); io.unobserve(en.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  document.querySelectorAll('.reveal, .fade, .clip-reveal').forEach((el) => io.observe(el));

  /* ---------- before / after compare slider (drag + keyboard) ---------- */
  const compare = document.querySelector('.compare');
  if (compare) {
    const afterWrap = compare.querySelector('.compare__after-wrap');
    const handle = compare.querySelector('.compare__handle');
    let pos = 50;
    const set = (p) => {
      pos = Math.max(2, Math.min(98, p));
      afterWrap.style.clipPath = `inset(0 0 0 ${pos}%)`;
      handle.style.left = `${pos}%`;
      const rounded = Math.round(pos);
      compare.setAttribute('aria-valuenow', rounded);
      compare.setAttribute('aria-valuetext', `Enhanced image ${rounded}% revealed`);
    };
    const setFromX = (clientX) => {
      const r = compare.getBoundingClientRect();
      set(((clientX - r.left) / r.width) * 100);
    };
    let down = false;
    compare.addEventListener('pointerdown', (e) => { down = true; compare.setPointerCapture(e.pointerId); setFromX(e.clientX); });
    compare.addEventListener('pointermove', (e) => { if (down) setFromX(e.clientX); });
    addEventListener('pointerup', () => { down = false; });
    compare.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); set(pos - 3); }
      if (e.key === 'ArrowRight') { e.preventDefault(); set(pos + 3); }
      if (e.key === 'Home') { e.preventDefault(); set(2); }
      if (e.key === 'End') { e.preventDefault(); set(98); }
    });
  }

  /* ---------- archive: drag to scroll ---------- */
  const rail = document.querySelector('.archive__rail');
  if (rail) {
    let isDown = false, startX = 0, startScroll = 0, moved = false;
    rail.addEventListener('pointerdown', (e) => {
      isDown = true; moved = false;
      startX = e.clientX; startScroll = rail.scrollLeft;
      rail.classList.add('dragging');
    });
    addEventListener('pointermove', (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      rail.scrollLeft = startScroll - dx;
    });
    addEventListener('pointerup', () => { isDown = false; rail.classList.remove('dragging'); });
    rail.addEventListener('click', (e) => { if (moved) e.preventDefault(); }, true);

    /* keyboard: the rail is focusable (tabindex=0) so keyboard-only users can
       reach and scroll it — horizontal arrow scrolling isn't reliable natively */
    rail.addEventListener('keydown', (e) => {
      const step = rail.clientWidth * 0.8;
      if (e.key === 'ArrowRight') { e.preventDefault(); rail.scrollBy({ left: step, behavior: 'smooth' }); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); rail.scrollBy({ left: -step, behavior: 'smooth' }); }
      else if (e.key === 'Home') { e.preventDefault(); rail.scrollTo({ left: 0, behavior: 'smooth' }); }
      else if (e.key === 'End') { e.preventDefault(); rail.scrollTo({ left: rail.scrollWidth, behavior: 'smooth' }); }
    });
  }

  /* ---------- archive: filter chips ---------- */
  const chips = document.querySelectorAll('.chip[data-filter]');
  if (chips.length && rail) {
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;
        chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
        rail.querySelectorAll('.archive-card').forEach((card) => {
          const show = filter === 'all' || card.dataset.cat === filter;
          card.classList.toggle('hidden', !show);
          if (show) card.classList.add('in-view');
        });
        rail.scrollLeft = 0;
      });
    });
  }

  /* ---------- reduced motion: freeze autoplaying archive videos ----------
     CSS can't halt <video> playback, so honor prefers-reduced-motion here.
     Autoplay is kept so the first frame still loads and paints (and the
     placeholder fade clears), but we stop looping and freeze on frame 0 —
     a still image, no ongoing motion. (WCAG 2.2.2 / 2.3.3) */
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach((v) => {
      v.loop = false;
      const freeze = () => { try { v.pause(); v.currentTime = 0; } catch (e) { /* not seekable yet */ } };
      if (v.readyState >= 2) freeze();
      v.addEventListener('loadeddata', freeze, { once: true });
    });
  }
})();

/* ---------- portrait: WebGL hover displacement (lazy) ----------
   The effect module (and its texture download) only loads when the
   portrait scrolls near the viewport, and only for desktop pointers
   without reduced-motion. */
(() => {
  const fig = document.querySelector('.about__portrait');
  if (!fig) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    io.disconnect();
    const s = document.createElement('script');
    s.src = 'assets/js/portrait-gl.js';
    s.defer = true;
    document.head.appendChild(s);
  }, { rootMargin: '600px' });
  io.observe(fig);
})();

(() => {
  /* ---------- certificate lightbox ---------- */
  const box = document.getElementById('cert-lightbox');
  const triggers = document.querySelectorAll('.cert__view');
  if (!box || !triggers.length) return;

  const img = box.querySelector('.lightbox__img');
  const closeBtn = box.querySelector('.lightbox__close');
  let lastFocused = null;

  const open = (trigger) => {
    lastFocused = trigger;
    img.src = trigger.dataset.cert;
    img.alt = trigger.dataset.certAlt || '';
    box.hidden = false;
    /* next frame so the display:none → grid switch can transition opacity */
    requestAnimationFrame(() => box.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const close = () => {
    box.classList.remove('is-open');
    document.body.style.overflow = '';
    const hide = () => { box.hidden = true; img.src = ''; };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) hide();
    else box.addEventListener('transitionend', hide, { once: true });
    if (lastFocused) lastFocused.focus();
  };

  triggers.forEach((t) => t.addEventListener('click', () => open(t)));
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    /* only the close button is focusable inside — keep Tab on it */
    if (e.key === 'Tab') { e.preventDefault(); closeBtn.focus(); }
  });
})();
