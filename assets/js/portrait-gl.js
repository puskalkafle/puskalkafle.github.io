/* ---------- portrait: WebGL hover displacement ----------
   Progressive enhancement: a canvas fades in over the portrait on hover
   and ripples the image around the cursor. Desktop pointers only; the
   plain <img> remains the source of truth everywhere else. */
(() => {
  const fig = document.querySelector('.about__portrait');
  const img = fig && fig.querySelector('img');
  if (!img) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl', { alpha: true, antialias: false });
  if (!gl) return;

  const VERT = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() {
      vUv = aPos * 0.5 + 0.5;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }`;
  const FRAG = `
    precision mediump float;
    uniform sampler2D uTex;
    uniform vec2 uMouse;
    uniform float uStrength;
    uniform vec2 uTexScale;
    varying vec2 vUv;
    void main() {
      vec2 d = vUv - uMouse;
      float falloff = exp(-length(d) * 7.0);
      vec2 push = normalize(d + 1e-4) * falloff * uStrength * 0.09;
      vec2 uv = (vUv - 0.5) * uTexScale + 0.5 - push;
      float ca = falloff * uStrength * 0.010;
      gl_FragColor = vec4(
        texture2D(uTex, uv + ca).r,
        texture2D(uTex, uv).g,
        texture2D(uTex, uv - ca).b,
        1.0);
    }`;

  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return;
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const uMouse = gl.getUniformLocation(prog, 'uMouse');
  const uStrength = gl.getUniformLocation(prog, 'uStrength');
  const uTexScale = gl.getUniformLocation(prog, 'uTexScale');

  const tex = gl.createTexture();
  let imgW = 0, imgH = 0;
  const src = new Image();
  src.onload = () => {
    imgW = src.naturalWidth;
    imgH = src.naturalHeight;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    mount();
  };
  src.src = img.currentSrc || img.src;

  let mouse = [0.5, 0.5];
  let strength = 0;
  let hovering = false;
  let raf = 0;

  const resize = () => {
    const rect = fig.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    const cAspect = rect.width / rect.height;
    const iAspect = imgW / imgH;
    gl.uniform2f(uTexScale,
      iAspect > cAspect ? cAspect / iAspect : 1,
      iAspect > cAspect ? 1 : iAspect / cAspect);
  };

  const frame = () => {
    strength *= 0.92;
    gl.uniform2f(uMouse, mouse[0], mouse[1]);
    gl.uniform1f(uStrength, strength);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (hovering || strength > 0.002) {
      raf = requestAnimationFrame(frame);
    } else {
      raf = 0;
      canvas.style.opacity = '0';
    }
  };
  const wake = () => { if (!raf) raf = requestAnimationFrame(frame); };

  const mount = () => {
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;' +
      'opacity:0;transition:opacity 0.35s;pointer-events:none;';
    fig.appendChild(canvas);
    resize();
    new ResizeObserver(resize).observe(fig);

    fig.addEventListener('pointerenter', () => {
      hovering = true;
      canvas.style.opacity = '1';
      wake();
    });
    fig.addEventListener('pointerleave', () => { hovering = false; });
    fig.addEventListener('pointermove', (e) => {
      const rect = fig.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      strength = Math.min(strength + Math.hypot(x - mouse[0], y - mouse[1]) * 4, 1);
      mouse = [x, y];
      wake();
    });
  };
})();
