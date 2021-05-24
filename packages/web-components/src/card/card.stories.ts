import { parseColorHexRGB } from '@microsoft/fast-colors';
import addons from '@storybook/addons';
import { STORY_RENDERED } from '@storybook/core-events';
import { SwatchRGB } from '../color-vNext/swatch';
import { fillColor } from '../design-tokens';
import CardTemplate from './fixtures/card.html';
import './index';

addons.getChannel().addListener(STORY_RENDERED, (name: string) => {
  if (name.toLowerCase().startsWith('card')) {
    document.querySelectorAll('.dark').forEach((el: HTMLElement) => {
      const color = parseColorHexRGB('#333333');
      const swatch = SwatchRGB.create(color!.r, color!.g, color!.b);

      fillColor.setValueFor(el, swatch);
    });

    document.querySelectorAll('.grey').forEach((el: HTMLElement) => {
      const color = parseColorHexRGB('#E5E5E5');
      const swatch = SwatchRGB.create(color!.r, color!.g, color!.b);
      fillColor.setValueFor(el, swatch);
    });

    document.querySelectorAll('.lightgrey').forEach((el: HTMLElement) => {
      const color = parseColorHexRGB('#F7F7F7');
      const swatch = SwatchRGB.create(color!.r, color!.g, color!.b);
      fillColor.setValueFor(el, swatch);
    });
  }
});

export default {
  title: 'Card',
};

export const Card = (): string => CardTemplate;
