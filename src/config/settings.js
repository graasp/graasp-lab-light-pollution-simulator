import { LOCAL_API_HOST } from './api';

// area around a post that cannot include other posts
export const BUFFER_WIDTH = 50;
export const MAX_LAMP_POSTS = 7;

// halo
export const NUM_CIRCLES_IN_HALO = 50;

// lamp post
export const DEFAULT_COLOR_RGBA = 'rgba(245, 230, 83, 1)';
export const DEFAULT_COLOR_TEXT = 'yellow';
export const DEFAULT_SHIELDING = 'none';
export const DEFAULT_SIZE = 'large';
export const FULL_SHIELDING = 'full';
export const HALF_SHIELDING = 'half';
export const NO_SHIELDING = 'none';

// reference dimensions
export const FOOTER_HEIGHT = Math.round(0.2 * window.innerHeight);
export const HOUSE_HEIGHT = Math.round(0.35 * window.innerHeight);

// sizes
export const SIZE_LARGE = 'large';
export const SIZE_SMALL = 'small';

// sky
export const SKY_COLOR = '#333232';

// stars
export const STAR_OPACITY_REDUCTION_FACTOR = 0.1;

// miscellany
export const DEFAULT_API_HOST =
  window.parent.location.hostname === 'localhost' ? LOCAL_API_HOST : null;
export const DEFAULT_MODE = 'student'; // teacher
export const DEFAULT_LANG = 'en';
