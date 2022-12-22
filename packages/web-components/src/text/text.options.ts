/**
 * TextSize constants
 * @public
 */
export const TextSize = {
  _100: '100',
  _200: '200',
  _300: '300',
  _400: '400',
  _500: '500',
  _600: '600',
  _700: '700',
  _800: '800',
  _900: '900',
  _1000: '1000',
} as const;

/**
 * The type for TextSize
 * The font size and line height based on the theme tokens
 * @public
 */
export type TextSize = typeof TextSize[keyof typeof TextSize];

/**
 * TextFont Constants
 * @public
 */
export const TextFont = {
  base: 'base',
  numeric: 'numeric',
  monospace: 'monospace',
} as const;

/**
 * Applies font family to the content
 * @public
 */
export type TextFont = typeof TextFont[keyof typeof TextFont];

/**
 * TextWeight Constants
 * @public
 */
export const TextWeight = {
  medium: 'medium',
  regular: 'regular',
  semibold: 'semibold',
} as const;

/**
 * Applies font weight to the content
 * @public
 */
export type TextWeight = typeof TextWeight[keyof typeof TextWeight];

/**
 * TextAlign Constants
 * @public
 */
export const TextAlign = {
  start: 'start',
  end: 'end',
  center: 'center',
  justify: 'justify',
} as const;

/**
 * Applies font weight to the content
 * @public
 */
export type TextAlign = typeof TextAlign[keyof typeof TextAlign];
