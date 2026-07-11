/* Puskal Kafle — Portfolio 2026 */
(() => {
  /* ---------- mobile menu ---------- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (nav && toggle) {
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
    nav.querySelectorAll('.nav__links a').forEach((a) => {
      a.addEventListener('click', () => setOpen(false));
    });
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) setOpen(false);
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
      compare.setAttribute('aria-valuenow', Math.round(pos));
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
})();
