import { LOCAL_API_HOST } from './api';

// lamp post
export const DEFAULT_SIZE = 'large';
export const DEFAULT_COLOR = 'yellow';

// sizes
export const SIZE_SMALL = 'small';
export const SIZE_LARGE = 'large';

// area around a post that cannot include other posts
export const BUFFER_WIDTH = 50;
export const MAX_LAMP_POSTS = 7;

export const DEFAULT_LANG = 'en';
export const DEFAULT_MODE = 'student';
export const DEFAULT_API_HOST =
  window.parent.location.hostname === 'localhost' ? LOCAL_API_HOST : null;
