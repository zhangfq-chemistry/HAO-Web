const factorialCache = [1];

export function factorial(n) {
  if (n < 0) return NaN;
  for (let i = factorialCache.length; i <= n; i += 1) {
    factorialCache[i] = factorialCache[i - 1] * i;
  }
  return factorialCache[n];
}

export function clampQuantumNumbers(n, l, m) {
  const nn = Math.max(1, Math.min(6, Math.round(n)));
  const ll = Math.max(0, Math.min(nn - 1, Math.round(l)));
  const mm = Math.max(-ll, Math.min(ll, Math.round(m)));
  return { n: nn, l: ll, m: mm };
}

export function orbitalLabel(n, l, m) {
  if (l === 0) return `${n}s`;
  if (l === 1) return `${n}${m === 0 ? "Pz" : m > 0 ? "Px" : "Py"}`;
  if (l === 2) {
    if (m === 0) return `${n}Dz2`;
    if (m === 1) return `${n}Dxz`;
    if (m === -1) return `${n}Dyz`;
    if (m === 2) return `${n}Dx2-y2`;
    if (m === -2) return `${n}Dxy`;
  }
  if (l === 3) {
    if (m === 0) return `${n}Fz3`;
    if (m === 1) return `${n}Fxz2`;
    if (m === -1) return `${n}Fyz2`;
    if (m === 2) return `${n}Fz(x2-y2)`;
    if (m === -2) return `${n}Fxyz`;
    if (m === 3) return `${n}Fx(x2-3y2)`;
    if (m === -3) return `${n}Fy(3x2-y2)`;
  }
  if (l === 4) {
    if (m === 0) return `${n}Gz4`;
    if (m === 1) return `${n}Gxz3`;
    if (m === -1) return `${n}Gyz3`;
    if (m === 2) return `${n}Gz2(x2-y2)`;
    if (m === -2) return `${n}Gxyz2`;
    if (m === 3) return `${n}Gxz(x2-3y2)`;
    if (m === -3) return `${n}Gyz(3x2-y2)`;
    if (m === 4) return `${n}Gx4-6x2y2+y4`;
    if (m === -4) return `${n}Gxy(x2-y2)`;
  }
  if (l === 5) {
    if (m === 0) return `${n}Hz5`;
    if (m === 1) return `${n}Hxz4`;
    if (m === -1) return `${n}Hyz4`;
    if (m === 2) return `${n}Hz3(x2-y2)`;
    if (m === -2) return `${n}Hxyz3`;
    if (m === 3) return `${n}Hz(x4-6x2y2+y4)`;
    if (m === -3) return `${n}Hxyz(x2-y2)`;
    if (m === 4) return `${n}Hxz(x2-y2)`;
    if (m === -4) return `${n}Hyz(x2-y2)`;
    if (m === 5) return `${n}Hx(x4-10x2y2+5y4)`;
    if (m === -5) return `${n}Hy(5x4-10x2y2+y4)`;
  }
  const letters = ["s", "P", "D", "F", "G", "H"];
  return `${n}${letters[l] ?? `L${l}`}${m}`;
}

function associatedLaguerre(k, alpha, x) {
  let sum = 0;
  for (let i = 0; i <= k; i += 1) {
    const coeff =
      ((i % 2 === 0 ? 1 : -1) * factorial(k + alpha)) /
      (factorial(k - i) * factorial(alpha + i) * factorial(i));
    sum += coeff * x ** i;
  }
  return sum;
}

function legendreP(l, m, x) {
  const mm = Math.abs(m);
  let pmm = 1;
  if (mm > 0) {
    const somx2 = Math.sqrt(Math.max(0, 1 - x * x));
    let fact = 1;
    for (let i = 1; i <= mm; i += 1) {
      pmm *= -fact * somx2;
      fact += 2;
    }
  }
  if (l === mm) return pmm;
  let pmmp1 = x * (2 * mm + 1) * pmm;
  if (l === mm + 1) return pmmp1;
  let pll = 0;
  for (let ll = mm + 2; ll <= l; ll += 1) {
    pll = ((2 * ll - 1) * x * pmmp1 - (ll + mm - 1) * pmm) / (ll - mm);
    pmm = pmmp1;
    pmmp1 = pll;
  }
  return pll;
}

export function realSphericalHarmonic(l, m, theta, phi) {
  const sinT = Math.sin(theta);
  const cosT = Math.cos(theta);
  const cosP = Math.cos(phi);
  const sinP = Math.sin(phi);
  if (l === 1) {
    const c = Math.sqrt(3 / (4 * Math.PI));
    if (m === 0) return c * cosT;
    if (m > 0) return c * sinT * cosP;
    return c * sinT * sinP;
  }
  if (l === 2) {
    if (m === 0) return (Math.sqrt(5 / Math.PI) / 4) * (3 * cosT * cosT - 1);
    if (m === 1) return (Math.sqrt(15 / Math.PI) / 2) * sinT * cosT * cosP;
    if (m === -1) return (Math.sqrt(15 / Math.PI) / 2) * sinT * cosT * sinP;
    if (m === 2) return (Math.sqrt(15 / Math.PI) / 4) * sinT * sinT * Math.cos(2 * phi);
    if (m === -2) return (Math.sqrt(15 / Math.PI) / 4) * sinT * sinT * Math.sin(2 * phi);
  }
  const absM = Math.abs(m);
  const norm = Math.sqrt(((2 * l + 1) / (4 * Math.PI)) * (factorial(l - absM) / factorial(l + absM)));
  const p = legendreP(l, absM, Math.cos(theta));
  if (m > 0) return Math.sqrt(2) * norm * p * Math.cos(absM * phi);
  if (m < 0) return Math.sqrt(2) * norm * p * Math.sin(absM * phi);
  return norm * p;
}

function clientLegendreP(l, m, x) {
  const mm = Math.abs(m);
  let tmp = 1;
  for (let i = 2; i <= 2 * mm; i += 2) {
    tmp *= (1 - x * x) * ((i + 1) / i);
  }

  let p2 = Math.sqrt(Math.max(0, tmp / 2));
  if (l === mm) return p2;

  let p1 = Math.sqrt(2 * mm + 3) * x * p2;
  if (l === mm + 1) return p1;

  let p = 0;
  let c2 = Math.sqrt((4 * mm * mm + 8 * mm + 3) / (2 * mm + 1));
  for (let i = mm + 2; i <= l; i += 1) {
    const c = Math.sqrt((4 * i * i - 1) / (i * i - mm * mm));
    p = p1 * x * c - (p2 * c) / c2;
    p2 = p1;
    p1 = p;
    c2 = c;
  }
  return p;
}

export function radial(n, l, z, r) {
  const rho = (2 * z * r) / n;
  const prefactor = Math.sqrt(((2 * z) / n) ** 3 * (factorial(n - l - 1) / (2 * n * factorial(n + l))));
  return prefactor * Math.exp(-rho / 2) * rho ** l * associatedLaguerre(n - l - 1, 2 * l + 1, rho);
}

export function psi({ n, l, m, z }, x, y, zc) {
  const r = Math.hypot(x, y, zc);
  if (r < 1e-9) {
    return l === 0 ? radial(n, l, z, 0) * realSphericalHarmonic(l, m, 0, 0) : 0;
  }
  const theta = Math.acos(zc / r);
  const phi = Math.atan2(y, x);
  return radial(n, l, z, r) * realSphericalHarmonic(l, m, theta, phi);
}

export function clientPsi({ n, l, m, z }, x, y, zc) {
  const rxy = Math.hypot(x, y);
  const r = Math.hypot(rxy, zc);
  const polar = r < 0.01 ? 0 : zc / r;
  const pb = radial(n, l, z, r) * clientLegendreP(l, m, polar);
  let phase = 1 / Math.sqrt(Math.PI);
  if (m !== 0) {
    const phi = rxy > 0.001 ? m * Math.atan2(y, x) : Math.PI / 2;
    phase *= m > 0 ? Math.cos(phi) : -Math.sin(phi);
  }
  return pb * phase;
}

export function radialDistribution(params, maxR, steps = 220) {
  const rows = [];
  let maxValue = 0;
  for (let i = 0; i <= steps; i += 1) {
    const r = (maxR * i) / steps;
    const value = r * r * radial(params.n, params.l, params.z, r) ** 2;
    maxValue = Math.max(maxValue, value);
    rows.push({ x: r, y: value });
  }
  return { rows, maxValue };
}

export function desktopGridSize(n) {
  if (n >= 7) return 120;
  if (n === 6) return 100;
  if (n === 5) return 90;
  if (n === 4) return 80;
  if (n === 3) return 70;
  if (n === 2) return 60;
  return 50;
}

const desktopBoxCache = new Map();

export function desktopBoxAndIso(params, probability = 0.8) {
  const cacheKey = `${params.n}|${params.l}|${params.z}|${probability}`;
  const cached = desktopBoxCache.get(cacheKey);
  if (cached) return { ...cached };

  let sum = 0;
  const h = 0.002;
  let r = 0;
  let guard = 0;
  while (guard < 200000) {
    const first = radialDistributionValue(params, r);
    const mid = radialDistributionValue(params, r + h / 2);
    const last = radialDistributionValue(params, r + h);
    sum += (first + 4 * mid + last) / 6;
    r += h;
    guard += 1;
    if (h * sum > probability) break;
  }

  const leastRadius = r * 1.5;
  const gridSize = desktopGridSize(params.n);
  const interval = (2 * Math.ceil(leastRadius)) / gridSize;
  const radius = (interval * gridSize) / 2;
  const iso = Math.sqrt(radialDistributionValue(params, r) / (4 * Math.PI * r * r)) || 0.0001;
  const result = { radius, iso: Math.max(0.0001, iso), gridSize, leastRadius };
  desktopBoxCache.set(cacheKey, result);
  return { ...result };
}

function radialDistributionValue(params, r) {
  return r * r * radial(params.n, params.l, params.z, r) ** 2;
}

const radialExtentCache = new Map();

export function radialDisplayExtent(params) {
  const cacheKey = `${params.n}|${params.l}|${params.z}`;
  const cached = radialExtentCache.get(cacheKey);
  if (cached != null) return cached;

  const { leastRadius } = desktopBoxAndIso(params);
  const extension = params.n === 1 && params.l === 0 ? 2 : 20;
  let extent = leastRadius;
  for (let r = 0.1; r <= leastRadius + extension; r += 0.1) {
    extent = r;
    if (r > leastRadius && radialDistributionValue(params, r) < 1e-9) break;
  }
  const result = Math.max(1, extent);
  radialExtentCache.set(cacheKey, result);
  return result;
}

const radialNodeCache = new Map();

export function radialNodeRadii(params) {
  const cacheKey = `${params.n}|${params.l}|${params.z}`;
  const cached = radialNodeCache.get(cacheKey);
  if (cached) return [...cached];

  const expected = Math.max(0, params.n - params.l - 1);
  if (!expected) return [];
  const extent = Math.max(radialDisplayExtent(params), desktopBoxAndIso(params).leastRadius * 1.2);
  const steps = Math.max(900, params.n * 520);
  const roots = [];
  let prevR = 1e-5;
  let prevValue = radial(params.n, params.l, params.z, prevR);

  for (let i = 1; i <= steps; i += 1) {
    const r = (extent * i) / steps;
    const value = radial(params.n, params.l, params.z, r);
    if (!Number.isFinite(value)) continue;
    if (Math.abs(prevValue) > 1e-14 && Math.abs(value) > 1e-14 && prevValue * value < 0) {
      let lo = prevR;
      let hi = r;
      let vlo = prevValue;
      for (let k = 0; k < 36; k += 1) {
        const mid = (lo + hi) / 2;
        const vmid = radial(params.n, params.l, params.z, mid);
        if (vlo * vmid <= 0) {
          hi = mid;
        } else {
          lo = mid;
          vlo = vmid;
        }
      }
      const root = (lo + hi) / 2;
      if (!roots.some((existing) => Math.abs(existing - root) < 0.02)) roots.push(root);
      if (roots.length >= expected) break;
    }
    prevR = r;
    prevValue = value;
  }

  roots.sort((a, b) => a - b);
  radialNodeCache.set(cacheKey, roots);
  return [...roots];
}

export function angularNodeInfo(params) {
  const absM = Math.abs(params.m);
  const polarExpected = Math.max(0, params.l - absM);
  const polar = [];
  if (polarExpected > 0) {
    const steps = Math.max(720, params.l * 300);
    const zeroEps = 1e-7;
    const addPolarRoot = (theta) => {
      if (theta <= 1e-5 || theta >= Math.PI - 1e-5) return;
      if (!polar.some((existing) => Math.abs(existing - theta) < 0.01)) polar.push(theta);
    };
    let prevTheta = 1e-5;
    let prevValue = clientLegendreP(params.l, params.m, Math.cos(prevTheta));
    let prevNonZeroTheta = Math.abs(prevValue) > zeroEps ? prevTheta : null;
    let prevNonZeroValue = Math.abs(prevValue) > zeroEps ? prevValue : null;
    for (let i = 1; i < steps; i += 1) {
      const theta = (Math.PI * i) / steps;
      const value = clientLegendreP(params.l, params.m, Math.cos(theta));
      if (Math.abs(value) <= zeroEps) {
        addPolarRoot(theta);
        if (polar.length >= polarExpected) break;
        prevTheta = theta;
        prevValue = value;
        continue;
      }
      if (prevNonZeroValue != null && prevNonZeroValue * value < 0) {
        let lo = prevNonZeroTheta;
        let hi = theta;
        let vlo = prevNonZeroValue;
        for (let k = 0; k < 34; k += 1) {
          const mid = (lo + hi) / 2;
          const vmid = clientLegendreP(params.l, params.m, Math.cos(mid));
          if (vlo * vmid <= 0) {
            hi = mid;
          } else {
            lo = mid;
            vlo = vmid;
          }
        }
        const root = (lo + hi) / 2;
        addPolarRoot(root);
        if (polar.length >= polarExpected) break;
      }
      prevTheta = theta;
      prevValue = value;
      prevNonZeroTheta = theta;
      prevNonZeroValue = value;
    }
  }

  const azimuthal = [];
  if (absM > 0) {
    for (let k = 0; k < absM; k += 1) {
      const phi = params.m > 0 ? ((k + 0.5) * Math.PI) / absM : (k * Math.PI) / absM;
      azimuthal.push(phi);
    }
  }
  return { polar, azimuthal };
}

export function angularSlice(params, steps = 240) {
  const rows = [];
  let maxAbs = 0;
  for (let i = 0; i <= steps; i += 1) {
    const theta = (Math.PI * i) / steps;
    const value = realSphericalHarmonic(params.l, params.m, theta, 0);
    maxAbs = Math.max(maxAbs, Math.abs(value));
    rows.push({ x: theta, y: value });
  }
  return { rows, maxAbs };
}

export function nodeSummary(n, l) {
  return `${n - l - 1} radial, ${l} angular`;
}

export function buildOrbitalPoints(params, options) {
  const { radius } = options;
  const probeDensity = Math.min(42, Math.max(24, Math.round(options.density * 0.58)));
  const positive = [];
  const negative = [];
  const step = (radius * 2) / (probeDensity - 1);
  const radius2 = radius * radius;
  const maxPerSign = 350000;
  let maxAbs = 0;

  for (let ix = 0; ix < probeDensity; ix += 1) {
    const x = -radius + ix * step;
    for (let iy = 0; iy < probeDensity; iy += 1) {
      const y = -radius + iy * step;
      for (let iz = 0; iz < probeDensity; iz += 1) {
        const z = -radius + iz * step;
        if (x * x + y * y + z * z > radius2) continue;
        if (!cutawayAllowsPoint(options.cutaway, x, y, z)) continue;
        const value = psi(params, x, y, z);
        maxAbs = Math.max(maxAbs, Math.abs(value));
      }
    }
  }

  const safeMax = maxAbs || 1;
  let state =
    ((params.n * 73856093) ^ (params.l * 19349663) ^ ((params.m + 8) * 83492791) ^ Math.round(radius * 1000)) >>> 0;
  const random = () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 4294967296;
  };
  const candidateCount = Math.min(6000000, Math.max(720000, options.density * options.density * 600));

  for (let i = 0; i < candidateCount; i += 1) {
    const x = (random() * 2 - 1) * radius;
    const y = (random() * 2 - 1) * radius;
    const z = (random() * 2 - 1) * radius;
    if (x * x + y * y + z * z > radius2) continue;
    if (!cutawayAllowsPoint(options.cutaway, x, y, z)) continue;
    const value = psi(params, x, y, z);
    const probability = Math.min(1, (Math.abs(value) / safeMax) ** 2);
    if (random() > probability) continue;
    const target = value >= 0 ? positive : negative;
    if (target.length / 3 >= maxPerSign) continue;
    target.push(x, y, z);
    if (positive.length / 3 >= maxPerSign && negative.length / 3 >= maxPerSign) break;
  }

  return { positive, negative };
}

export function buildAngularSurface(params, options) {
  const thetaSegments = options.thetaSegments ?? 64;
  const phiSegments = options.phiSegments ?? 128;
  const radius = options.radius ?? 4;
  const values = [];
  let maxAbs = 0;

  for (let ti = 0; ti <= thetaSegments; ti += 1) {
    const theta = (Math.PI * ti) / thetaSegments;
    const row = [];
    for (let pi = 0; pi <= phiSegments; pi += 1) {
      const phi = (Math.PI * 2 * pi) / phiSegments;
      const value = realSphericalHarmonic(params.l, params.m, theta, phi);
      row.push(value);
      maxAbs = Math.max(maxAbs, Math.abs(value));
    }
    values.push(row);
  }

  function buildForSign(sign) {
    const vertices = [];
    const indices = [];
    const grid = [];
    const scale = radius / (maxAbs || 1);

    for (let ti = 0; ti <= thetaSegments; ti += 1) {
      const theta = (Math.PI * ti) / thetaSegments;
      const row = [];
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      for (let pi = 0; pi <= phiSegments; pi += 1) {
        const phi = (Math.PI * 2 * pi) / phiSegments;
        const value = values[ti][pi];
        if (sign * value <= 1e-6) {
          row.push(-1);
          continue;
        }
        const r = Math.abs(value) * scale;
        row.push(vertices.length / 3);
        vertices.push(r * sinTheta * Math.cos(phi), r * sinTheta * Math.sin(phi), r * cosTheta);
      }
      grid.push(row);
    }

    for (let ti = 0; ti < thetaSegments; ti += 1) {
      for (let pi = 0; pi < phiSegments; pi += 1) {
        const a = grid[ti][pi];
        const b = grid[ti + 1][pi];
        const c = grid[ti][pi + 1];
        const d = grid[ti + 1][pi + 1];
        if (a >= 0 && b >= 0 && c >= 0) indices.push(a, b, c);
        if (c >= 0 && b >= 0 && d >= 0) indices.push(c, b, d);
      }
    }
    return { vertices, indices };
  }

  return { positive: buildForSign(1), negative: buildForSign(-1) };
}

function cutawayAllowsPoint(cutaway, x, y, z) {
  if (cutaway === "quarter") return y <= 0 && z <= 0;
  if (cutaway === "eighth") return x <= 0 && y <= 0 && z <= 0;
  if (cutaway === "threeQuarter") return !(y > 0 && z > 0);
  return true;
}

export function fillScalarField(field, params, options, sign = 1) {
  const density = options.density;
  const radius = options.radius;
  const step = (radius * 2) / density;
  let index = 0;
  let maxAbs = 0;

  for (let zIndex = 0; zIndex < density; zIndex += 1) {
    const z = -radius + zIndex * step;
    for (let yIndex = 0; yIndex < density; yIndex += 1) {
      const y = -radius + yIndex * step;
      for (let xIndex = 0; xIndex < density; xIndex += 1) {
        const x = -radius + xIndex * step;
        const value = cutawayAllowsPoint(options.cutaway, x, y, z) ? sign * psi(params, x, y, z) : 0;
        field[index] = value;
        maxAbs = Math.max(maxAbs, Math.abs(value));
        index += 1;
      }
    }
  }

  return maxAbs;
}

export function fillNodeField(field, params, options) {
  return fillScalarField(field, params, options, 1);
}

export function sampleSlice(params, options, plane, size = 180) {
  const rows = [];
  const radius = options.radius;
  let maxAbs = 0;

  for (let yIndex = 0; yIndex < size; yIndex += 1) {
    const row = [];
    const b = radius - (2 * radius * yIndex) / (size - 1);
    for (let xIndex = 0; xIndex < size; xIndex += 1) {
      const a = -radius + (2 * radius * xIndex) / (size - 1);
      let value = 0;
      if (plane === "xoy") value = psi(params, a, b, 0);
      if (plane === "xoz") value = psi(params, a, 0, b);
      if (plane === "yoz") value = psi(params, 0, a, b);
      maxAbs = Math.max(maxAbs, Math.abs(value));
      row.push(value);
    }
    rows.push(row);
  }

  return { rows, maxAbs };
}

function radiusForSign(params, direction, options, sign) {
  const steps = 140;
  const dr = options.radius / steps;
  let previousR = 0;
  let previousValue = sign * psi(params, 0, 0, 0) - options.iso;
  let best = null;

  for (let i = 1; i <= steps; i += 1) {
    const r = i * dr;
    const value =
      sign * psi(params, direction.x * r, direction.y * r, direction.z * r) - options.iso;
    if (previousValue <= 0 && value >= 0) {
      let lo = previousR;
      let hi = r;
      for (let k = 0; k < 12; k += 1) {
        const mid = (lo + hi) / 2;
        const midValue =
          sign * psi(params, direction.x * mid, direction.y * mid, direction.z * mid) - options.iso;
        if (midValue >= 0) hi = mid;
        else lo = mid;
      }
      best = hi;
    }
    if (previousValue >= 0 && value <= 0 && best !== null) {
      let lo = previousR;
      let hi = r;
      for (let k = 0; k < 12; k += 1) {
        const mid = (lo + hi) / 2;
        const midValue =
          sign * psi(params, direction.x * mid, direction.y * mid, direction.z * mid) - options.iso;
        if (midValue >= 0) lo = mid;
        else hi = mid;
      }
      best = lo;
    }
    previousR = r;
    previousValue = value;
  }

  return best;
}

export function buildOrbitalSurface(params, options) {
  const thetaSegments = options.thetaSegments ?? 58;
  const phiSegments = options.phiSegments ?? 96;

  function buildForSign(sign) {
    const vertices = [];
    const indices = [];
    const grid = [];

    for (let ti = 0; ti <= thetaSegments; ti += 1) {
      const theta = (Math.PI * ti) / thetaSegments;
      const row = [];
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);
      for (let pi = 0; pi <= phiSegments; pi += 1) {
        const phi = (Math.PI * 2 * pi) / phiSegments;
        const direction = {
          x: sinTheta * Math.cos(phi),
          y: sinTheta * Math.sin(phi),
          z: cosTheta,
        };
        const r = radiusForSign(params, direction, options, sign);
        if (r === null || !Number.isFinite(r)) {
          row.push(-1);
        } else {
          row.push(vertices.length / 3);
          vertices.push(direction.x * r, direction.y * r, direction.z * r);
        }
      }
      grid.push(row);
    }

    for (let ti = 0; ti < thetaSegments; ti += 1) {
      for (let pi = 0; pi < phiSegments; pi += 1) {
        const a = grid[ti][pi];
        const b = grid[ti + 1][pi];
        const c = grid[ti + 1][pi + 1];
        const d = grid[ti][pi + 1];
        if (a >= 0 && b >= 0 && c >= 0) indices.push(a, b, c);
        if (a >= 0 && c >= 0 && d >= 0) indices.push(a, c, d);
      }
    }

    return { vertices, indices };
  }

  return {
    positive: buildForSign(1),
    negative: buildForSign(-1),
  };
}
