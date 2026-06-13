/* Puskal Kafle — Portfolio 2026 */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- preloader ---------- */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    const count = preloader.querySelector('.preloader__count');
    let n = 0;
    const finish = () => {
      preloader.classList.add('done');
      document.body.classList.add('loaded');
      setTimeout(() => preloader.remove(), 1000);
    };
    if (reduceMotion) {
      finish();
    } else {
      const tick = () => {
        n = Math.min(100, n + Math.ceil(Math.random() * 14));
        if (count) count.textContent = n;
        if (n < 100) setTimeout(tick, 60);
        else setTimeout(finish, 250);
      };
      tick();
    }
  }

  /* ---------- smooth scroll (Lenis, optional) ---------- */
  if (!reduceMotion && window.Lenis) {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: 0 }); }
      });
    });
  }

  /* ---------- custom cursor ---------- */
  const cursor = document.querySelector('.cursor');
  const tag = document.querySelector('.cursor-tag');
  if (cursor && matchMedia('(hover: hover)').matches) {
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; });
    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      if (tag) { tag.style.left = `${cx}px`; tag.style.top = `${cy}px`; }
      requestAnimationFrame(loop);
    };
    loop();
    const hoverables = 'a, button, .compare, [data-cursor]';
    document.addEventListener('mouseover', (e) => {
      const t = e.target.closest(hoverables);
      cursor.classList.toggle('is-link', !!t);
      if (tag) {
        const label = t && t.getAttribute('data-cursor');
        if (label) { tag.textContent = label; tag.classList.add('on'); }
        else tag.classList.remove('on');
      }
    });
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
  document.querySelectorAll('.reveal, .fade, .clip-reveal, [data-reveal-group]').forEach((el) => io.observe(el));

  /* ---------- work list: floating image preview ---------- */
  const preview = document.querySelector('.work-preview');
  if (preview && matchMedia('(hover: hover)').matches) {
    const imgs = preview.querySelectorAll('img');
    let px = 0, py = 0, tx = 0, ty = 0, active = false;
    addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    const loop = () => {
      px += (tx - px) * 0.12;
      py += (ty - py) * 0.12;
      preview.style.transform = `translate(${px - preview.offsetWidth / 2}px, ${py - preview.offsetHeight / 2}px) scale(${active ? 1 : 0.9})`;
      requestAnimationFrame(loop);
    };
    loop();
    document.querySelectorAll('.work-item a').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        const key = link.dataset.preview;
        imgs.forEach((im) => im.classList.toggle('show', im.dataset.key === key));
        active = true;
        preview.classList.add('on');
      });
      link.addEventListener('mouseleave', () => {
        active = false;
        preview.classList.remove('on');
      });
    });
  }

  /* ---------- before / after compare slider ---------- */
  const compare = document.querySelector('.compare');
  if (compare) {
    const afterWrap = compare.querySelector('.compare__after-wrap');
    const handle = compare.querySelector('.compare__handle');
    const set = (clientX) => {
      const r = compare.getBoundingClientRect();
      const p = Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100));
      afterWrap.style.clipPath = `inset(0 0 0 ${p}%)`;
      handle.style.left = `${p}%`;
    };
    let down = false;
    compare.addEventListener('pointerdown', (e) => { down = true; compare.setPointerCapture(e.pointerId); set(e.clientX); });
    compare.addEventListener('pointermove', (e) => { if (down) set(e.clientX); });
    addEventListener('pointerup', () => { down = false; });
    compare.addEventListener('mousemove', (e) => { if (!down) set(e.clientX); });
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

  /* ---------- nav: hide on scroll down ---------- */
  const nav = document.querySelector('.nav');
  if (nav) {
    let last = 0;
    addEventListener('scroll', () => {
      const y = scrollY;
      nav.style.transform = y > 140 && y > last ? 'translateY(-110%)' : 'translateY(0)';
      nav.classList.toggle('scrolled', y > 40);
      last = y;
    }, { passive: true });
  }
})();
