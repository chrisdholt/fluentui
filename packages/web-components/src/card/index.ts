import { attr } from '@microsoft/fast-element';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { DI, FoundationElement, CardTemplate as template } from '@microsoft/fast-foundation';
import { SwatchRGB } from '../color-vNext/swatch';
import { PaletteRGB } from '../color-vNext/palette';
import { fillColor, NeutralFillCard, neutralPalette } from '../design-tokens';
import { CardStyles as styles } from './card.styles';

/**
 * @internal
 */
export class Card extends FoundationElement {
  /**
   * Background color for the card component. Sets context for the design system.
   * @public
   * @remarks
   * HTML Attribute: card-background-color
   */
  @attr({
    attribute: 'card-background-color',
    mode: 'fromView',
  })
  public cardBackgroundColor: string;
  private cardBackgroundColorChanged(prev: string | void, next: string | void): void {
    if (typeof next === 'string') {
      const color = parseColorHexRGB(next);

      if (color) {
        const swatch = SwatchRGB.create(color.r, color.g, color.b);
        const palette = PaletteRGB.create(swatch);

        fillColor.setValueFor(this, swatch);
        neutralPalette.setValueFor(this, palette);
      }
    }
  }

  /**
   * @internal
   */
  public handleChange(): void {
    if (!this.cardBackgroundColor) {
      fillColor.setValueFor(this, (target: HTMLElement) => {
        return DI.findParentContainer(target).get(NeutralFillCard)(target, fillColor.getValueFor(this.parentElement!));
      });
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.handleChange();
  }
}

/**
 * The Fluent Card Element. Implements {@link @microsoft/fast-foundation#Card},
 * {@link @microsoft/fast-foundation#CardTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-card\>
 */
export const fluentCard = Card.compose({
  baseName: 'card',
  template,
  styles,
});

/**
 * Styles for Card
 * @public
 */
export const CardStyles = styles;
