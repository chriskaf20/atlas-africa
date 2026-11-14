/**
 * Carte de l'Afrique en points, calculée une seule fois côté serveur.
 *
 * Les contours sont volontairement simplifiés : ils servent uniquement à
 * décider quels points d'une grille régulière tombent sur le continent.
 * Coordonnées : [latitude, longitude] en degrés.
 */

type Point = readonly [lat: number, lon: number];

const AFRICA: readonly Point[] = [
  // Côte nord, d'ouest en est
  [35.8, -5.8], [35.9, -5.3], [35.25, -3.9], [35.3, -2.95], [35.1, -2.2], [35.7, -0.65],
  [36.5, 1.3], [36.8, 3.05], [36.75, 5.1], [36.9, 6.9], [36.9, 7.75], [37.3, 9.85],
  [37.05, 11.05], [36.4, 10.6], [35.8, 10.65], [34.7, 10.75], [33.9, 10.1], [33.5, 11.1],
  [32.9, 13.2], [32.4, 15.1], [31.2, 16.6], [30.3, 19.2], [30.8, 20.0], [32.1, 20.1],
  [32.8, 22.6], [32.1, 24.0], [31.6, 25.2], [31.2, 29.9], [31.5, 31.8], [31.3, 32.3],
  // Mer Rouge et Corne de l'Afrique
  [30.0, 32.5], [28.0, 33.5], [27.2, 33.8], [26.1, 34.3], [24.0, 35.5], [22.2, 36.6],
  [19.6, 37.2], [18.0, 38.5], [15.6, 39.5], [14.5, 41.0], [13.0, 42.7], [11.6, 43.1],
  [10.4, 45.0], [11.0, 47.5], [11.3, 49.2], [11.8, 51.3], [10.4, 51.2],
  // Côte est, du nord au sud
  [9.0, 50.6], [8.0, 49.8], [6.5, 49.1], [5.3, 48.5], [3.5, 47.2], [2.0, 45.3],
  [0.5, 43.5], [-0.4, 42.5], [-2.3, 40.9], [-3.2, 40.1], [-4.0, 39.7], [-5.1, 39.1],
  [-6.8, 39.3], [-8.9, 39.5], [-10.3, 40.2], [-13.0, 40.5], [-15.0, 40.7], [-16.2, 39.9],
  [-17.9, 37.0], [-19.8, 34.9], [-21.0, 35.1], [-22.0, 35.3], [-23.9, 35.5], [-25.1, 33.7],
  [-26.0, 32.6], [-27.0, 32.9], [-28.4, 32.4], [-29.9, 31.0], [-31.6, 29.5], [-33.0, 27.9],
  [-34.0, 25.6], [-34.2, 22.1], [-34.8, 20.0],
  // Côte ouest, du sud au nord
  [-34.35, 18.5], [-33.9, 18.4], [-33.0, 17.9], [-32.1, 18.3], [-30.0, 17.2], [-28.6, 16.5],
  [-26.6, 15.2], [-24.5, 14.6], [-23.0, 14.5], [-21.0, 13.5], [-18.4, 12.0], [-17.25, 11.75],
  [-15.2, 12.1], [-12.6, 13.4], [-12.35, 13.55], [-10.7, 13.8], [-8.8, 13.2], [-7.3, 12.9],
  [-6.1, 12.3], [-5.5, 12.2], [-4.8, 11.85], [-3.4, 10.65], [-2.0, 9.4], [-0.6, 8.7],
  [0.4, 9.4], [1.9, 9.8], [2.9, 9.9], [4.0, 9.5], [4.5, 8.5], [4.3, 7.0],
  [4.3, 6.0], [5.5, 5.0], [6.4, 3.4], [6.3, 2.4], [6.1, 1.2], [5.5, -0.2],
  [4.75, -2.1], [5.25, -4.0], [5.0, -6.0], [4.4, -7.7], [5.5, -9.5], [6.3, -10.8],
  [7.5, -12.5], [8.5, -13.2], [9.5, -13.7], [10.6, -14.8], [11.8, -16.0], [12.4, -16.7],
  [13.5, -16.6], [14.7, -17.5], [16.0, -16.5], [18.1, -16.0], [19.4, -16.5], [20.8, -17.05],
  [23.7, -15.9], [26.1, -14.5], [27.9, -12.9], [28.5, -11.3], [29.4, -10.2], [30.4, -9.6],
  [30.6, -9.9], [31.5, -9.8], [32.3, -9.25], [33.25, -8.5], [33.6, -7.6], [34.0, -6.8],
  [35.2, -6.15],
];

const MADAGASCAR: readonly Point[] = [
  [-12.0, 49.3], [-14.9, 50.3], [-18.1, 49.4], [-22.8, 47.8], [-25.0, 47.0], [-25.6, 45.1],
  [-23.4, 43.7], [-20.3, 44.3], [-16.2, 44.5], [-15.7, 46.3], [-13.3, 48.3],
];

const DRC: readonly Point[] = [
  [-5.9, 12.3], [-4.6, 13.0], [-4.8, 14.4], [-4.3, 15.3], [-2.2, 16.2], [-1.0, 17.2],
  [-0.5, 17.7], [1.5, 18.1], [3.5, 18.6], [4.4, 18.6], [5.1, 19.6], [4.3, 21.2],
  [4.1, 22.4], [4.8, 22.9], [5.0, 24.4], [5.1, 25.4], [5.3, 27.3], [4.4, 28.3],
  [4.3, 29.8], [3.5, 30.9], [2.2, 31.2], [1.2, 30.3], [0.2, 29.8], [-1.4, 29.6],
  [-2.5, 28.9], [-3.4, 29.2], [-4.5, 29.4], [-6.0, 29.5], [-7.0, 30.2], [-8.2, 30.7],
  [-8.4, 28.9], [-9.4, 28.5], [-10.4, 28.6], [-11.6, 28.5], [-12.3, 29.0], [-12.3, 29.8],
  [-13.4, 29.7], [-13.4, 29.1], [-12.6, 28.4], [-12.3, 27.8], [-11.8, 27.2], [-12.0, 26.2],
  [-11.6, 25.3], [-11.2, 24.4], [-10.9, 24.0], [-11.1, 22.8], [-10.7, 22.3], [-9.0, 21.8],
  [-7.3, 21.8], [-7.3, 20.5], [-8.0, 19.4], [-8.1, 17.6], [-7.0, 17.0], [-5.9, 16.6],
  [-5.9, 13.2],
];

/** Lubumbashi. */
const HQ: Point = [-11.66, 27.48];

// Cadre de la carte (degrés) et échelle (unités SVG par degré).
const LON_MIN = -19;
const LON_MAX = 53;
const LAT_MAX = 39;
const LAT_MIN = -37;
const SCALE = 10;
/** Pas de la grille de points, en degrés. */
const STEP = 1.5;

function project([lat, lon]: Point): { x: number; y: number } {
  return { x: (lon - LON_MIN) * SCALE, y: (LAT_MAX - lat) * SCALE };
}

function contains(polygon: readonly Point[], lat: number, lon: number): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [latI, lonI] = polygon[i];
    const [latJ, lonJ] = polygon[j];
    const crosses =
      latI > lat !== latJ > lat && lon < ((lonJ - lonI) * (lat - latI)) / (latJ - latI) + lonI;
    if (crosses) inside = !inside;
  }
  return inside;
}

/**
 * Trace les points retenus sous la forme d'un unique chemin SVG : chaque point
 * est un segment de longueur nulle (`h0`), rendu rond par `stroke-linecap`.
 */
function dotsPath(keep: (lat: number, lon: number) => boolean): string {
  let d = "";
  for (let lat = LAT_MAX - STEP; lat > LAT_MIN; lat -= STEP) {
    let previousX: number | null = null;
    for (let lon = LON_MIN + STEP; lon < LON_MAX; lon += STEP) {
      if (!keep(lat, lon)) continue;
      const { x, y } = project([lat, lon]);
      d += previousX === null ? `M${x} ${y}h0` : `m${x - previousX} 0h0`;
      previousX = x;
    }
  }
  return d;
}

const inDrc = (lat: number, lon: number) => contains(DRC, lat, lon);
const inAfrica = (lat: number, lon: number) =>
  contains(AFRICA, lat, lon) || contains(MADAGASCAR, lat, lon);

export const africaMap = {
  width: (LON_MAX - LON_MIN) * SCALE,
  height: (LAT_MAX - LAT_MIN) * SCALE,
  /** Diamètre conseillé des points. */
  dotSize: STEP * SCALE * 0.42,
  continentPath: dotsPath((lat, lon) => inAfrica(lat, lon) && !inDrc(lat, lon)),
  drcPath: dotsPath(inDrc),
  hq: project(HQ),
};
