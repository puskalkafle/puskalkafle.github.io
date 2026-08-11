/* ---------- hero: Himalayan ridgeline (WebGL points) ----------
   Progressive enhancement: layered ridgelines of low-alpha points evoke
   the Everest massif behind the hero type. The range is alive three ways:
   a slow band of light drifts across it, the points scatter away from the
   cursor like wind-blown snow (and glow while displaced), and a jet-stream
   plume streams off the summit — Everest's signature. Reduced-motion gets
   a single static frame; no WebGL means no canvas at all. */
(() => {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.createElement('canvas');
  canvas.className = 'hero__gl';
  canvas.setAttribute('aria-hidden', 'true'); /* decorative background — hide from AT */
  const gl = canvas.getContext('webgl', {
    alpha: true, antialias: false, premultipliedAlpha: false,
    powerPreference: 'low-power',
  });
  if (!gl) return;

  const NOISE = `
    float hash(float n) { return fract(sin(n) * 43758.5453123); }
    float noise(float x) {
      float i = floor(x), f = fract(x);
      float s = f * f * (3.0 - 2.0 * f);
      return mix(hash(i), hash(i + 1.0), s);
    }`;

  const RIDGE_VERT = `
    attribute vec2 aCell;      /* x: u along the ridge, y: t depth (0 far, 1 near) */
    uniform float uTime;
    uniform vec2 uMouse;       /* wind cursor, hero-space NDC (parked offscreen until it moves) */
    uniform vec2 uPar;         /* parallax offset, zero until the pointer moves */
    uniform float uAspect;
    uniform float uDpr;
    uniform float uWide;       /* 0 portrait .. 1 wide: lifts the range into the
                                  empty top-right sky instead of behind the title */
    varying float vAlpha;
    varying vec3 vColor;
    ${NOISE}
    /* ridged fbm: sharp crests, soft valleys */
    float ridge(float x) {
      float a = 0.0, amp = 0.5, f = 1.0;
      for (int i = 0; i < 4; i++) {
        a += amp * (1.0 - abs(noise(x * f) * 2.0 - 1.0));
        f *= 2.13; amp *= 0.5;
      }
      return a;
    }
    float peak(float x, float c, float w, float h) {
      float d = (x - c) / w;
      return h * exp(-d * d);
    }

    void main() {
      float u = aCell.x, t = aCell.y;
      float x = (u * 2.0 - 1.0) * mix(1.1, 1.35, t);   /* near lines span wider */
      float ax = x * uAspect;                           /* aspect-true feature size */

      /* the massif — Nuptse / Everest / Lhotse — pinned to mid-depth layers */
      float window = smoothstep(0.1, 0.35, t) * (1.0 - smoothstep(0.45, 0.7, t));
      float massif =
        peak((x - 0.02) * uAspect, 0.0, 0.34, 0.5) +
        peak((x - 0.30) * uAspect, 0.0, 0.16, 1.15) +
        peak((x - 0.52) * uAspect, 0.0, 0.22, 0.75);
      massif *= window;
      /* quiet the fbm around the summit so its height stays deterministic
         (the plume emitter is aimed at it from JS) */
      /* on wide screens the massif towers over the flattened horizon,
         like the real skyline; portrait keeps it in scale with the range */
      float h = ridge(ax * 1.9 + t * 31.7) * mix(0.5, 1.0, t)
              * (1.0 - 0.5 * clamp(massif, 0.0, 1.15) / 1.15)
              + massif * mix(1.0, 1.45, uWide);

      /* portrait: tall field behind the type; wide: range grounded on the
         bottom edge, out of the reading path (motion stays peripheral) */
      float yBase = mix(mix(0.40, -0.28, t), mix(-0.52, -1.04, t), uWide);
      float amp = mix(mix(0.12, 0.30, t), mix(0.10, 0.24, t), uWide);
      float y = yBase + h * amp;
      /* depth parallax */
      x += uPar.x * mix(0.006, 0.05, t);
      y += uPar.y * mix(0.004, 0.03, t);

      /* wind: points scatter away from the cursor and settle back */
      vec2 d = vec2(x, y) - uMouse;
      float force = exp(-dot(d, d) * 16.0);
      vec2 blown = vec2(x, y) + normalize(d + 1e-4) * force * 0.085 * mix(0.35, 1.0, t);
      blown.y += force * 0.015 * noise(ax * 24.0 + uTime * 3.0);   /* flutter */

      /* drifting band of light across the range; scattered points glow */
      float light = 0.55 + 0.45 * noise(ax * 1.4 - uTime * 0.06 + t * 7.0);
      float edge = smoothstep(1.05, 0.7, abs(x));
      /* wide: dim leftward so foothills stay quiet under the CTA/tagline text */
      edge *= mix(1.0, 0.45 + 0.55 * smoothstep(-1.1, 0.3, x), uWide);
      vAlpha = mix(0.34, 0.6, t) * mix(1.0, 1.35, uWide) * edge * light * (1.0 + force * 1.4);

      float snow = smoothstep(0.7, 1.1, h);
      vColor = mix(vec3(0.95, 0.94, 0.91), vec3(1.00, 0.62, 0.18), max(snow * 0.7, force * 0.5));

      gl_Position = vec4(blown, 0.0, 1.0);
      gl_PointSize = mix(1.5, 2.8, t) * uDpr;
    }`;

  const PLUME_VERT = `
    attribute vec2 aSeed;      /* two per-particle randoms */
    uniform float uTime;
    uniform vec2 uPar;
    uniform float uDpr;
    uniform vec2 uSummit;
    varying float vAlpha;
    varying vec3 vColor;
    ${NOISE}
    void main() {
      /* each particle loops: born at the summit, streamed east by the jet,
         staggered by its seed so the plume never pulses */
      float life = fract(uTime * mix(0.10, 0.22, aSeed.y) + aSeed.x * 7.31);
      float along = life * mix(0.22, 0.42, aSeed.y);
      vec2 pos = uSummit;
      pos.x += along + (aSeed.x - 0.5) * 0.015;
      pos.y += along * 0.16                                  /* lofted */
             + (noise(life * 5.0 + aSeed.x * 43.0) - 0.5) * 0.10 * life  /* turbulence */
             + (aSeed.y - 0.5) * 0.02;
      pos += uPar * 0.03;                                     /* massif-depth parallax */

      vAlpha = smoothstep(0.0, 0.12, life) * (1.0 - life) * mix(0.25, 0.55, aSeed.y);
      vColor = mix(vec3(0.97, 0.96, 0.94), vec3(1.00, 0.62, 0.18), aSeed.x * 0.35);
      gl_Position = vec4(pos, 0.0, 1.0);
      gl_PointSize = mix(1.2, 2.6, aSeed.y) * (1.0 - life * 0.45) * uDpr;
    }`;

  const FRAG = `
    precision mediump float;
    varying float vAlpha;
    varying vec3 vColor;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      gl_FragColor = vec4(vColor, vAlpha * smoothstep(0.5, 0.1, d));
    }`;

  const build = (vertSrc) => {
    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, vertSrc);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    return gl.getProgramParameter(prog, gl.LINK_STATUS) ? prog : null;
  };

  const ridgeProg = build(RIDGE_VERT);
  const plumeProg = build(PLUME_VERT);
  if (!ridgeProg || !plumeProg) return;

  /* ridge grid */
  const small = innerWidth < 700;
  const LINES = small ? 24 : 34;
  const PER = small ? 220 : 380;
  const cells = new Float32Array(LINES * PER * 2);
  for (let l = 0, i = 0; l < LINES; l++) {
    for (let p = 0; p < PER; p++) {
      cells[i++] = p / (PER - 1);
      cells[i++] = l / (LINES - 1);
    }
  }
  /* plume particles: hash-seeded, no Math.random needed */
  const PLUME = small ? 260 : 420;
  const seeds = new Float32Array(PLUME * 2);
  for (let i = 0; i < PLUME * 2; i++) {
    seeds[i] = ((i * 2654435761) % 4294967296) / 4294967296;
  }

  const mkBuffer = (data) => {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    return b;
  };
  const ridgeBuf = mkBuffer(cells);
  const plumeBuf = mkBuffer(seeds);

  const loc = (prog, name) => gl.getUniformLocation(prog, name);
  const ridgeU = { time: loc(ridgeProg, 'uTime'), mouse: loc(ridgeProg, 'uMouse'), par: loc(ridgeProg, 'uPar'), aspect: loc(ridgeProg, 'uAspect'), dpr: loc(ridgeProg, 'uDpr'), wide: loc(ridgeProg, 'uWide'), attr: gl.getAttribLocation(ridgeProg, 'aCell') };
  const plumeU = { time: loc(plumeProg, 'uTime'), par: loc(plumeProg, 'uPar'), dpr: loc(plumeProg, 'uDpr'), summit: loc(plumeProg, 'uSummit'), attr: gl.getAttribLocation(plumeProg, 'aSeed') };

  /* summit of the main peak, mirroring the ridge shader's constants at the
     massif window center t=0.4: yBase mix(0.40,-0.28,t) + wide lift + height
     ~1.35 (massif 1.15 + damped fbm) * amp mix(0.12,0.30,t) */
  const T = 0.4;
  const mixN = (a, b, m) => a + (b - a) * m;
  const summitY = (wide) =>
    mixN(mixN(0.40, -0.28, T), mixN(-0.52, -1.04, T), wide) +
    (1.15 * mixN(1.0, 1.45, wide) + 0.2) *
    mixN(mixN(0.12, 0.30, T), mixN(0.10, 0.24, T), wide);

  gl.enable(gl.BLEND);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE);
  gl.clearColor(0, 0, 0, 0);

  let dpr = 1, aspect = 1, wide = 0;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 1.75);
    canvas.width = hero.clientWidth * dpr;
    canvas.height = hero.clientHeight * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
    aspect = canvas.width / canvas.height;
    wide = Math.min(Math.max((aspect - 1.05) / 0.55, 0), 1);
  };

  /* wind cursor parks offscreen (zero force); parallax stays centered until
     the pointer actually moves */
  let mx = -4, my = -4, tx = -4, ty = -4;
  let px = 0, py = 0, moved = false;
  const draw = (time) => {
    mx += (tx - mx) * 0.05;
    my += (ty - my) * 0.05;
    px += ((moved ? tx : 0) - px) * 0.05;
    py += ((moved ? ty : 0) - py) * 0.05;
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(ridgeProg);
    gl.bindBuffer(gl.ARRAY_BUFFER, ridgeBuf);
    gl.enableVertexAttribArray(ridgeU.attr);
    gl.vertexAttribPointer(ridgeU.attr, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(ridgeU.time, time);
    gl.uniform2f(ridgeU.mouse, mx, my);
    gl.uniform2f(ridgeU.par, px, py);
    gl.uniform1f(ridgeU.aspect, aspect);
    gl.uniform1f(ridgeU.dpr, dpr);
    gl.uniform1f(ridgeU.wide, wide);
    gl.drawArrays(gl.POINTS, 0, LINES * PER);

    gl.useProgram(plumeProg);
    gl.bindBuffer(gl.ARRAY_BUFFER, plumeBuf);
    gl.enableVertexAttribArray(plumeU.attr);
    gl.vertexAttribPointer(plumeU.attr, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(plumeU.time, time);
    gl.uniform2f(plumeU.par, px, py);
    gl.uniform1f(plumeU.dpr, dpr);
    gl.uniform2f(plumeU.summit, 0.30, summitY(wide));
    gl.drawArrays(gl.POINTS, 0, PLUME);
  };

  resize();
  hero.prepend(canvas);
  addEventListener('resize', () => { resize(); if (reduceMotion) draw(120); });

  if (reduceMotion) {
    draw(120); /* one lit frame: still range, frozen wisp of plume */
    return;
  }

  addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width) * 2 - 1;
    ty = 1 - ((e.clientY - r.top) / r.height) * 2;
    moved = true;
  }, { passive: true });

  /* render only while the hero is on screen */
  let running = false, raf = 0;
  const loop = () => {
    draw(performance.now() * 0.001);
    if (running) raf = requestAnimationFrame(loop);
  };
  new IntersectionObserver((entries) => {
    const visible = entries.some((e) => e.isIntersecting);
    if (visible && !running) { running = true; raf = requestAnimationFrame(loop); }
    if (!visible && running) { running = false; cancelAnimationFrame(raf); }
  }).observe(hero);
})();
