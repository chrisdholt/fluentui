import { customElement, ViewTemplate } from '@microsoft/fast-element';
import { createMenuItemTemplate, MenuItem } from '@microsoft/fast-foundation';
import { MenuItemStyles as styles } from './menu-item.styles';

const template: ViewTemplate = createMenuItemTemplate('fluent');

/**
 * The Fluent Menu Item Element. Implements {@link @microsoft/fast-foundation#MenuItem},
 * {@link @microsoft/fast-foundation#MenuItemTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-menu-item\>
 */
@customElement({
  name: 'fluent-menu-item',
  template,
  styles,
  shadowOptions: {
    mode: 'closed',
  },
})
export class FluentMenuItem extends MenuItem {}

/**
 * Styles for MenuItem
 * @public
 */
export const MenuItemStyles = styles;
