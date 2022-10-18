import { attr, observable } from '@microsoft/fast-element';
import { FASTButton } from '@microsoft/fast-foundation';

/**
 * Types of button appearance.
 * @public
 */
export type ButtonAppearance = undefined | 'primary' | 'subtle' | 'outline' | 'transparent';

/**
 * Types of button shape.
 * @public
 */
export type ButtonShape = 'circular' | 'square' | 'rounded';

/**
 * Types of button size.
 * @public
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * @internal
 */
export class Button extends FASTButton {
  /**
   * The appearance the button should have.
   *
   * @public
   * @remarks
   * HTML Attribute: appearance
   */
  @attr
  public appearance: ButtonAppearance;

  /**
   * The shape the button should have.
   *
   * @public
   * @remarks
   * HTML Attribute: shape
   */
  @attr
  public shape: ButtonShape = 'rounded';

  /**
   * The size the button should have.
   *
   * @public
   * @remarks
   * HTML Attribute: shape
   */
  @attr
  public size: ButtonSize = 'medium';

  /**
   * The button can fill its space.
   *
   * @public
   * @remarks
   * HTML Attribute: block
   */
  @attr({ mode: 'boolean' })
  public block: boolean = false;

  /**
   * The button only contains an icon
   *
   * @public
   * @remarks
   * HTML Attribute: icon-only
   */
  @attr({ attribute: 'icon-only', mode: 'boolean' })
  public iconOnly: boolean = false;

  /**
   * The appearance the button should have.
   *
   * @public
   * @remarks
   * HTML Attribute: block
   */
  @attr({ attribute: 'disabledfocusable', mode: 'boolean' })
  public disabledFocusable: boolean;
  protected disabledFocusableChanged(next: boolean | undefined, prev: boolean): void {
    this.ariaDisabled = this.disabledFocusable ?? null;
  }

  /**
   * @internal
   */
  @observable
  public ariaDisabled: 'true' | 'false' | string | null;
}
