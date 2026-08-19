/**
 * Shared canvas size and palette for every drawn project scene.
 *
 * Kept in its own module so `ProjectVisual.jsx` and `ProjectScenes.jsx` draw
 * from one palette and the whole set still reads as a single product family.
 */

export const W = 640
export const H = 400

export const C = {
  bg: '#ffffff',
  chrome: '#f5f6f9',
  border: '#e4e7ee',
  hair: '#eef0f5',
  panel: '#f8f9fc',
  barLight: '#e7eaf1',
  barMid: '#ccd3e0',
  barDark: '#aab4c6',
  ink: '#0d1b30',
  muted: '#8a95a6',
  accent: '#1d4ed8',
  accentSoft: '#e4edfc',
  sky: '#0ea5e9',
  green: '#16a34a',
  amber: '#d97706',
  red: '#dc2626',
}

/* Brand colours sampled from each platform, so a scene is recognisable at a
   glance as Shopify, WooCommerce or WordPress rather than generic chrome. */
export const BRAND = {
  shopify: '#008060',
  shopifySoft: '#e3f1ed',
  woo: '#7f54b3',
  wooSoft: '#efe9f7',
  wp: '#2271b1',
  wpSidebar: '#1d2327',
  wpSidebarInk: '#c3c4c7',
  laravel: '#f53003',
  php: '#4f5b93',
  flutter: '#0468d7',
  android: '#3ddc84',
  react: '#087ea4',
}

export const SANS = 'Helvetica, Arial, sans-serif'
export const MONO = 'monospace'
