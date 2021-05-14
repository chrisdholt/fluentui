import { Switch, switchTemplate as template } from '@microsoft/fast-foundation';
import { switchStyles as styles } from './switch.styles';

/**
 * The Fluent Switch Custom Element. Implements {@link @microsoft/fast-foundation#Switch},
 * {@link @microsoft/fast-foundation#SwitchTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-switch\>
 */
export const fluentSwitch = Switch.compose({
  baseName: 'switch',
  template,
  styles,
});

/**
 * Styles for Switch
 * @public
 */
export const switchStyles = styles;
