import { attr, FASTElement } from '@microsoft/fast-element';
import type { ImageFit, ImageShape } from './image.options.js';

/**
 * @internal
 */
export class Image extends FASTElement {
  /**
   * An image can appear with rectangular border.
   *
   * @public
   * @remarks
   * HTML Attribute: bordered
   */
  @attr({ mode: 'boolean' })
  public bordered: boolean = false;

  /**
   * An image can set how it should be resized to fit its container.
   *
   * @public
   * @remarks
   * HTML Attribute: fit
   */
  @attr
  public fit: ImageFit;

  /**
   * An image can take up the width of its container.
   *
   * @public
   * @remarks
   * HTML Attribute: block
   */
  @attr({ mode: 'boolean' })
  block: boolean = false;

  /**
   * An image can appear square, circular, or rounded.
   *
   * @public
   * @remarks
   * HTML Attribute: shape
   */
  shape: ImageShape;

  /**
   * An image can appear elevated with shadow.
   *
   * @public
   * @remarks
   * HTML Attribute: shadow
   */
  shadow: boolean;
}
