import { buttonTemplate } from '@microsoft/fast-foundation';
import { FluentDesignSystem } from '../fluent-design-system.js';
import { Button } from './button.js';
import { styles } from './button.styles.js';

/**
 * The Fluent Button Element
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-button\>
 */
export const definition = Button.compose({
  name: `${FluentDesignSystem.prefix}-button`,
  template: buttonTemplate(),
  styles,
});
