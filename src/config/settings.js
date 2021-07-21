import { LOCAL_API_HOST } from './api';

// area around a post that cannot include other posts
export const BUFFER_WIDTH = 50;
export const MAX_LAMP_POSTS = 7;

// halo
export const NUM_CIRCLES_IN_HALO = 50;

// lamp post
export const DEFAULT_COLOR_RGBA = 'rgba(255, 152, 0, 1)';
export const DEFAULT_COLOR_TEXT = 'yellow';
export const DEFAULT_SHIELDING = 'none';
export const DEFAULT_SIZE = 'large';
export const FULL_SHIELDING = 'full';
export const HALF_SHIELDING = 'half';
export const TOP_SHIELDING = 'top';
export const NO_SHIELDING = 'none';

// moon
export const DEFAULT_COLOR_MOON_RGBA = 'rgba(0, 0, 0, 1)';
export const CRESCENT_MOON = 'CRESCENT_MOON';
export const FULL_MOON = 'FULL_MOON';
export const NEW_MOON = 'NEW_MOON';
export const QUARTER_MOON = 'QUARTER_MOON';
export const NUM_ITERATIONS_TO_SKIP = 10;

// reference dimensions
export const FIXED_WIDTH = 1882; // todo: replace with dynamic innerWidth
export const FIXED_HEIGHT = 950; // todo: replace with dynamic innerHeight
export const FOOTER_HEIGHT = Math.round(0.2 * FIXED_HEIGHT);
export const HOUSE_HEIGHT = Math.round(0.35 * FIXED_HEIGHT);

// sidewalk
export const SIDEWALK_COLOR = 'rgba(30, 30, 30, 1)';

// sizes
export const SIZE_LARGE = 'large';
export const SIZE_SMALL = 'small';

// sky
export const SKY_COLOR = '#333232';

// stars
export const STAR_OPACITY_REDUCTION_FACTOR = 0.075;

// miscellany
export const DEFAULT_API_HOST =
  window.parent.location.hostname === 'localhost' ? LOCAL_API_HOST : null;
export const DEFAULT_MODE = 'student'; // teacher
export const DEFAULT_LANG = 'en';

export const DEFAULT_VISIBILITY = 'private';
export const PUBLIC_VISIBILITY = 'public';
