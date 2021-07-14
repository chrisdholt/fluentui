import { CSSDesignToken, DesignToken } from '@microsoft/fast-foundation';
import { Direction } from '@microsoft/fast-web-utilities';
import { Palette, PaletteRGB } from './color/palette';
import { Swatch } from './color/swatch';
import { accentFill as accentFillAlgorithm } from './color/recipes/accent-fill';
import { accentForeground as accentForegroundAlgorithm } from './color/recipes/accent-foreground';
import { foregroundOnAccent as foregroundOnAccentAlgorithm } from './color/recipes/foreground-on-accent';
import { neutralFillInverse as neutralFillInverseAlgorithm } from './color/recipes/neutral-fill-inverse';
import { neutralDivider as neutralDividerAlgorithm } from './color/recipes/neutral-divider';
import { neutralFill as neutralFillAlgorithm } from './color/recipes/neutral-fill';
import { neutralFillInput as neutralFillInputAlgorithm } from './color/recipes/neutral-fill-input';
import { neutralFillLayer as neutralFillLayerAlgorithm } from './color/recipes/neutral-fill-layer';
import { neutralFillStealth as neutralFillStealthAlgorithm } from './color/recipes/neutral-fill-stealth';
import { neutralFillContrast as neutralFillContrastAlgorithm } from './color/recipes/neutral-fill-contrast';
import {
  focusStrokeInner as focusStrokeInnerAlgorithm,
  focusStrokeOuter as focusStrokeOuterAlgorithm,
} from './color/recipes/focus-stroke';
import { neutralForeground as neutralForegroundAlgorithm } from './color/recipes/neutral-foreground';
import { neutralForegroundHint as neutralForegroundHintAlgorithm } from './color/recipes/neutral-foreground-hint';
import { neutralLayerCardContainer as neutralLayerCardContainerAlgorithm } from './color/recipes/neutral-layer-card-container';
import { neutralLayerFloating as neutralLayerFloatingAlgorithm } from './color/recipes/neutral-layer-floating';
import { neutralLayer1 as neutralLayer1Algorithm } from './color/recipes/neutral-layer-1';
import { neutralLayer2 as neutralLayer2Algorithm } from './color/recipes/neutral-layer-2';
import { neutralLayer3 as neutralLayer3Algorithm } from './color/recipes/neutral-layer-3';
import { neutralLayer4 as neutralLayer4Algorithm } from './color/recipes/neutral-layer-4';
import { neutralStroke as neutralStrokeAlgorithm } from './color/recipes/neutral-stroke';
import { accentBase, middleGrey } from './color/utilities/color-constants';
import { StandardLuminance } from './color/utilities/base-layer-luminance';
import { InteractiveSwatchSet } from './color/recipe';

/** @public */
export interface Recipe<T> {
  evaluate(element: HTMLElement, reference?: Swatch): T;
}

/** @public */
export type ColorRecipe = Recipe<Swatch>;

/** @public */
export type InteractiveColorRecipe = Recipe<InteractiveSwatchSet>;

const { create } = DesignToken;

/** @public */
export const accentFillRestDelta: DesignToken<number> = create<number>('accent-fill-rest-delta').withDefault(0);
/** @public */
export const accentFillHoverDelta: DesignToken<number> = create<number>('accent-fill-hover-delta').withDefault(4);
/** @public */
export const accentFillActiveDelta: DesignToken<number> = create<number>('accent-fill-active-delta').withDefault(-5);
/** @public */
export const accentFillFocusDelta: DesignToken<number> = create<number>('accent-fill-focus-delta').withDefault(0);

/** @public */
export const accentForegroundRestDelta: DesignToken<number> = create<number>(
  'accent-foreground-rest-delta',
).withDefault(0);
/** @public */
export const accentForegroundHoverDelta: DesignToken<number> = create<number>(
  'accent-foreground-hover-delta',
).withDefault(6);
/** @public */
export const accentForegroundActiveDelta: DesignToken<number> = create<number>(
  'accent-foreground-active-delta',
).withDefault(-4);
/** @public */
export const accentForegroundFocusDelta: DesignToken<number> = create<number>(
  'accent-foreground-focus-delta',
).withDefault(0);

/** @public */
export const bodyFont: DesignToken<string> = create<string>('body-font').withDefault('Segoe UI, sans-serif');
/** @public */
export const baseHeightMultiplier: DesignToken<number> = create<number>('base-height-multiplier').withDefault(8);
/** @public */
export const baseHorizontalSpacingMultiplier: DesignToken<number> = create<number>(
  'base-horizontal-spacing-multiplier',
).withDefault(3);
/** @public */
export const baseLayerLuminance: DesignToken<number> = create<number>('base-layer-luminance').withDefault(
  StandardLuminance.LightMode,
);
/** @public */
export const controlCornerRadius: DesignToken<number> = create<number>('control-corner-radius').withDefault(4);
/** @public @deprecated Use controlCornerRadius */
export const cornerRadius = controlCornerRadius;
/** @public */
export const density: DesignToken<number> = create<number>('density').withDefault(0);
/** @public */
export const designUnit: DesignToken<number> = create<number>('design-unit').withDefault(4);
/** @public */
export const direction: DesignToken<Direction> = create<Direction>('direction').withDefault(Direction.ltr);
/** @public */
export const disabledOpacity: DesignToken<number> = create<number>('disabled-opacity').withDefault(0.3);
/** @public */
export const layerCornerRadius: DesignToken<number> = create<number>('layer-corner-radius').withDefault(4);
/** @public @deprecated Use layerCornerRadius */
export const elevatedCornerRadius: DesignToken<number> = layerCornerRadius;
/** @public */
export const focusStrokeWidth: DesignToken<number> = create<number>('focus-stroke-width').withDefault(2);
/** @public @deprecated Use focusStrokeWidth */
export const focusOutlineWidth: DesignToken<number> = focusStrokeWidth;

/** @public */
export const neutralFillInverseRestDelta: DesignToken<number> = create<number>(
  'neutral-fill-inverse-rest-delta',
).withDefault(0);
/** @public */
export const neutralFillInverseHoverDelta: DesignToken<number> = create<number>(
  'neutral-fill-inverse-hover-delta',
).withDefault(-3);
/** @public */
export const neutralFillInverseActiveDelta: DesignToken<number> = create<number>(
  'neutral-fill-inverse-active-delta',
).withDefault(7);
/** @public */
export const neutralFillInverseFocusDelta: DesignToken<number> = create<number>(
  'neutral-fill-inverse-focus-delta',
).withDefault(0);
/** @public @deprecated Use neutralFillInverseRestDelta */
export const neutralContrastFillRestDelta: DesignToken<number> = neutralFillInverseRestDelta;
/** @public @deprecated Use neutralFillInverseHoverDelta */
export const neutralContrastFillHoverDelta: DesignToken<number> = neutralFillInverseHoverDelta;
/** @public @deprecated Use neutralFillInverseActiveDelta */
export const neutralContrastFillActiveDelta: DesignToken<number> = neutralFillInverseActiveDelta;
/** @public @deprecated Use neutralFillInverseFocusDelta */
export const neutralContrastFillFocusDelta: DesignToken<number> = neutralFillInverseFocusDelta;

/** @public */
export const neutralStrokeDividerRestDelta: DesignToken<number> = create<number>(
  'neutral-stroke-divider-rest-delta',
).withDefault(8);
/** @public @deprecated Use neutralStrokeDividerRestDelta */
export const neutralDividerRestDelta: DesignToken<number> = neutralStrokeDividerRestDelta;

/** @public */
export const neutralFillActiveDelta: DesignToken<number> = create<number>('neutral-fill-active-delta').withDefault(5);
/** @public */
export const neutralFillLayerRestDelta: DesignToken<number> = create<number>(
  'neutral-fill-layer-rest-delta',
).withDefault(3);
/** @public @deprecated Use neutralFillLayerRestDelta */
export const neutralFillCardDelta: DesignToken<number> = neutralFillLayerRestDelta;
/** @public */
export const neutralFillFocusDelta: DesignToken<number> = create<number>('neutral-fill-focus-delta').withDefault(0);
/** @public */
export const neutralFillHoverDelta: DesignToken<number> = create<number>('neutral-fill-hover-delta').withDefault(10);

/** @public */
export const neutralFillInputActiveDelta: DesignToken<number> = create<number>(
  'neutral-fill-input-active-delta',
).withDefault(0);
/** @public */
export const neutralFillInputFocusDelta: DesignToken<number> = create<number>(
  'neutral-fill-input-focus-delta',
).withDefault(0);
/** @public */
export const neutralFillInputHoverDelta: DesignToken<number> = create<number>(
  'neutral-fill-input-hover-delta',
).withDefault(0);
/** @public */
export const neutralFillInputRestDelta: DesignToken<number> = create<number>(
  'neutral-fill-input-rest-delta',
).withDefault(0);

/** @public */
export const neutralFillRestDelta: DesignToken<number> = create<number>('neutral-fill-rest-delta').withDefault(7);

/** @public */
export const neutralFillStealthActiveDelta: DesignToken<number> = create<number>(
  'neutral-fill-stealth-active-delta',
).withDefault(3);
/** @public */
export const neutralFillStealthFocusDelta: DesignToken<number> = create<number>(
  'neutral-fill-stealth-focus-delta',
).withDefault(0);
/** @public */
export const neutralFillStealthHoverDelta: DesignToken<number> = create<number>(
  'neutral-fill-stealth-hover-delta',
).withDefault(5);
/** @public */
export const neutralFillStealthRestDelta: DesignToken<number> = create<number>(
  'neutral-fill-stealth-rest-delta',
).withDefault(0);

/** @public */
export const neutralFillStrongRestDelta: DesignToken<number> = create<number>(
  'neutral-fill-strong-rest-delta',
).withDefault(0);
/** @public */
export const neutralFillStrongActiveDelta: DesignToken<number> = create<number>(
  'neutral-fill-strong-active-delta',
).withDefault(-5);
/** @public */
export const neutralFillStrongFocusDelta: DesignToken<number> = create<number>(
  'neutral-fill-strong-focus-delta',
).withDefault(0);
/** @public */
export const neutralFillStrongHoverDelta: DesignToken<number> = create<number>(
  'neutral-fill-strong-hover-delta',
).withDefault(8);
/** @public @deprecated Use neutralFillStrongRestDelta */
export const neutralFillToggleRestDelta: DesignToken<number> = neutralFillStrongRestDelta;
/** @public @deprecated Use neutralFillStrongHoverDelta */
export const neutralFillToggleHoverDelta: DesignToken<number> = neutralFillStrongHoverDelta;
/** @public @deprecated Use neutralFillStrongActiveDelta */
export const neutralFillToggleActiveDelta: DesignToken<number> = neutralFillStrongActiveDelta;
/** @public @deprecated Use neutralFillStrongFocusDelta */
export const neutralFillToggleFocusDelta: DesignToken<number> = neutralFillStrongFocusDelta;

/** @public */
export const neutralStrokeActiveDelta: DesignToken<number> = create<number>('neutral-stroke-active-delta').withDefault(
  16,
);
/** @public */
export const neutralStrokeFocusDelta: DesignToken<number> = create<number>('neutral-stroke-focus-delta').withDefault(
  25,
);
/** @public */
export const neutralStrokeHoverDelta: DesignToken<number> = create<number>('neutral-stroke-hover-delta').withDefault(
  40,
);
/** @public */
export const neutralStrokeRestDelta: DesignToken<number> = create<number>('neutral-stroke-rest-delta').withDefault(25);

/** @public */
export const strokeWidth: DesignToken<number> = create<number>('stroke-width').withDefault(1);
/** @public @deprecated Use strokeWidth */
export const outlineWidth: DesignToken<number> = strokeWidth;

/** @public */
export const typeRampBaseFontSize: DesignToken<string> = create<string>('type-ramp-base-font-size').withDefault('14px');
/** @public */
export const typeRampBaseLineHeight: DesignToken<string> = create<string>('type-ramp-base-line-height').withDefault(
  '20px',
);
/** @public */
export const typeRampMinus1FontSize: DesignToken<string> = create<string>('type-ramp-minus-1-font-size').withDefault(
  '12px',
);
/** @public */
export const typeRampMinus1LineHeight: DesignToken<string> = create<string>(
  'type-ramp-minus-1-line-height',
).withDefault('16px');
/** @public */
export const typeRampMinus2FontSize: DesignToken<string> = create<string>('type-ramp-minus-2-font-size').withDefault(
  '10px',
);
/** @public */
export const typeRampMinus2LineHeight: DesignToken<string> = create<string>(
  'type-ramp-minus-2-line-height',
).withDefault('14px');
/** @public */
export const typeRampPlus1FontSize: DesignToken<string> = create<string>('type-ramp-plus-1-font-size').withDefault(
  '16px',
);
/** @public */
export const typeRampPlus1LineHeight: DesignToken<string> = create<string>('type-ramp-plus-1-line-height').withDefault(
  '22px',
);
/** @public */
export const typeRampPlus2FontSize: DesignToken<string> = create<string>('type-ramp-plus-2-font-size').withDefault(
  '20px',
);
/** @public */
export const typeRampPlus2LineHeight: DesignToken<string> = create<string>('type-ramp-plus-2-line-height').withDefault(
  '28px',
);
/** @public */
export const typeRampPlus3FontSize: DesignToken<string> = create<string>('type-ramp-plus-3-font-size').withDefault(
  '24px',
);
/** @public */
export const typeRampPlus3LineHeight: DesignToken<string> = create<string>('type-ramp-plus-3-line-height').withDefault(
  '32px',
);
/** @public */
export const typeRampPlus4FontSize: DesignToken<string> = create<string>('type-ramp-plus-4-font-size').withDefault(
  '28px',
);
/** @public */
export const typeRampPlus4LineHeight: DesignToken<string> = create<string>('type-ramp-plus-4-line-height').withDefault(
  '36px',
);
/** @public */
export const typeRampPlus5FontSize: DesignToken<string> = create<string>('type-ramp-plus-5-font-size').withDefault(
  '32px',
);
/** @public */
export const typeRampPlus5LineHeight: DesignToken<string> = create<string>('type-ramp-plus-5-line-height').withDefault(
  '40px',
);
/** @public */
export const typeRampPlus6FontSize: DesignToken<string> = create<string>('type-ramp-plus-6-font-size').withDefault(
  '40px',
);
/** @public */
export const typeRampPlus6LineHeight: DesignToken<string> = create<string>('type-ramp-plus-6-line-height').withDefault(
  '52px',
);

/** @public */
export const neutralPalette: DesignToken<Palette<Swatch>> = create<Palette>({
  name: 'neutral-palette',
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.create(middleGrey));
/** @public */
export const accentPalette: DesignToken<Palette<Swatch>> = create<Palette>({
  name: 'accent-palette',
  cssCustomPropertyName: null,
}).withDefault(PaletteRGB.create(accentBase));

/** @public */
export const fillColor: CSSDesignToken<Swatch> = create<Swatch>('fill-color').withDefault(element => {
  const palette = neutralPalette.getValueFor(element);
  return palette.get(0);
});

enum ContrastTarget {
  normal = 4.5,
  large = 7,
}

// Accent Fill
const accentFillByContrast = (contrast: number) => (element: HTMLElement, reference?: Swatch) =>
  accentFillAlgorithm(
    accentPalette.getValueFor(element),
    neutralPalette.getValueFor(element),
    reference || fillColor.getValueFor(element),
    accentFillHoverDelta.getValueFor(element),
    accentFillActiveDelta.getValueFor(element),
    accentFillFocusDelta.getValueFor(element),
    neutralFillRestDelta.getValueFor(element),
    neutralFillHoverDelta.getValueFor(element),
    neutralFillActiveDelta.getValueFor(element),
  );
/** @public */
export const accentFillRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'accent-fill-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    accentFillByContrast(ContrastTarget.normal)(element, reference),
});

/** @public */
export const accentFillRest: CSSDesignToken<Swatch> = create<Swatch>('accent-fill-rest').withDefault(
  (element: HTMLElement) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).rest;
  },
);
/** @public */
export const accentFillHover: CSSDesignToken<Swatch> = create<Swatch>('accent-fill-hover').withDefault(
  (element: HTMLElement) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).hover;
  },
);
/** @public */
export const accentFillActive: CSSDesignToken<Swatch> = create<Swatch>('accent-fill-active').withDefault(
  (element: HTMLElement) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).active;
  },
);
/** @public */
export const accentFillFocus: CSSDesignToken<Swatch> = create<Swatch>('accent-fill-focus').withDefault(
  (element: HTMLElement) => {
    return accentFillRecipe.getValueFor(element).evaluate(element).focus;
  },
);

// Foreground On Accent
const foregroundOnAccentByContrast = (contrast: number) => (element: HTMLElement, reference?: Swatch) =>
  foregroundOnAccentAlgorithm(reference || accentFillRest.getValueFor(element), contrast);
/** @public */
export const foregroundOnAccentRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'foreground-on-accent-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): Swatch =>
    foregroundOnAccentByContrast(ContrastTarget.normal)(element, reference),
});
/** @public */
export const foregroundOnAccentRest: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-rest',
).withDefault((element: HTMLElement) =>
  foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillRest.getValueFor(element)),
);
/** @public @deprecated Use foregroundOnAccentRest */
export const accentForegroundCut: CSSDesignToken<Swatch> = foregroundOnAccentRest;
/** @public */
export const foregroundOnAccentHover: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-hover',
).withDefault((element: HTMLElement) =>
  foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillHover.getValueFor(element)),
);
/** @public */
export const foregroundOnAccentActive: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-active',
).withDefault((element: HTMLElement) =>
  foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillActive.getValueFor(element)),
);
/** @public */
export const foregroundOnAccentFocus: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-focus',
).withDefault((element: HTMLElement) =>
  foregroundOnAccentRecipe.getValueFor(element).evaluate(element, accentFillFocus.getValueFor(element)),
);

/** @public */
export const foregroundOnAccentLargeRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'foreground-on-accent-large-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): Swatch =>
    foregroundOnAccentByContrast(ContrastTarget.large)(element, reference),
});
/** @public */
export const foregroundOnAccentRestLarge: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-rest-large',
).withDefault((element: HTMLElement) => foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use foregroundOnAccentRestLarge */
export const accentForegroundCutLarge: CSSDesignToken<Swatch> = foregroundOnAccentRestLarge;
/** @public */
export const foregroundOnAccentHoverLarge: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-hover-large',
).withDefault((element: HTMLElement) =>
  foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillHover.getValueFor(element)),
);
/** @public */
export const foregroundOnAccentActiveLarge: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-active-large',
).withDefault((element: HTMLElement) =>
  foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillActive.getValueFor(element)),
);
/** @public */
export const foregroundOnAccentFocusLarge: CSSDesignToken<Swatch> = create<Swatch>(
  'foreground-on-accent-focus-large',
).withDefault((element: HTMLElement) =>
  foregroundOnAccentLargeRecipe.getValueFor(element).evaluate(element, accentFillFocus.getValueFor(element)),
);

// Accent Foreground
const accentForegroundByContrast = (contrast: number) => (element: HTMLElement, reference?: Swatch) =>
  accentForegroundAlgorithm(
    accentPalette.getValueFor(element),
    reference || fillColor.getValueFor(element),
    contrast,
    accentForegroundRestDelta.getValueFor(element),
    accentForegroundHoverDelta.getValueFor(element),
    accentForegroundActiveDelta.getValueFor(element),
    accentForegroundFocusDelta.getValueFor(element),
  );

/** @public */
export const accentForegroundRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'accent-foreground-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    accentForegroundByContrast(ContrastTarget.normal)(element, reference),
});

/** @public */
export const accentForegroundRest: CSSDesignToken<Swatch> = create<Swatch>('accent-foreground-rest').withDefault(
  (element: HTMLElement) => accentForegroundRecipe.getValueFor(element).evaluate(element).rest,
);
/** @public */
export const accentForegroundHover: CSSDesignToken<Swatch> = create<Swatch>('accent-foreground-hover').withDefault(
  (element: HTMLElement) => accentForegroundRecipe.getValueFor(element).evaluate(element).hover,
);
/** @public */
export const accentForegroundActive: CSSDesignToken<Swatch> = create<Swatch>('accent-foreground-active').withDefault(
  (element: HTMLElement) => accentForegroundRecipe.getValueFor(element).evaluate(element).active,
);
/** @public */
export const accentForegroundFocus: CSSDesignToken<Swatch> = create<Swatch>('accent-foreground-focus').withDefault(
  (element: HTMLElement) => accentForegroundRecipe.getValueFor(element).evaluate(element).focus,
);

// Neutral Divider
/** @public */
export const neutralStrokeDividerRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-stroke-divider-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): Swatch =>
    neutralDividerAlgorithm(
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      neutralStrokeDividerRestDelta.getValueFor(element),
    ),
});
/** @public */
export const neutralStrokeDividerRest: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-stroke-divider-rest',
).withDefault(element => neutralStrokeDividerRecipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use neutralStrokeDividerRest */
export const neutralDivider: CSSDesignToken<Swatch> = neutralStrokeDividerRest;

// Neutral Fill Layer
/** @public */
export const neutralFillLayerRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-fill-layer-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): Swatch =>
    neutralFillLayerAlgorithm(
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      neutralFillLayerRestDelta.getValueFor(element),
    ),
});
/** @public */
export const neutralFillLayerRest: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-fill-layer-rest',
).withDefault((element: HTMLElement) => neutralFillLayerRecipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use neutralFillLayerRest */
export const neutralFillCard: CSSDesignToken<Swatch> = neutralFillLayerRest;

// Neutral Fill Inverse
/** @public */
export const neutralFillInverseRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'neutral-fill-inverse-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    neutralFillInverseAlgorithm(
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      neutralFillInverseRestDelta.getValueFor(element),
      neutralFillInverseHoverDelta.getValueFor(element),
      neutralFillInverseActiveDelta.getValueFor(element),
      neutralFillInverseFocusDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralFillInverseRest: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-inverse-rest').withDefault(
  (element: HTMLElement) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).rest,
);
/** @public */
export const neutralFillInverseHover: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-inverse-hover').withDefault(
  (element: HTMLElement) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).hover,
);
/** @public */
export const neutralFillInverseActive: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-fill-inverse-active',
).withDefault((element: HTMLElement) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillInverseFocus: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-inverse-focus').withDefault(
  (element: HTMLElement) => neutralFillInverseRecipe.getValueFor(element).evaluate(element).focus,
);
/** @public @deprecated Use neutralFillInverseRest */
export const neutralContrastFillRest: CSSDesignToken<Swatch> = neutralFillInverseRest;
/** @public @deprecated Use neutralFillInverseHover */
export const neutralContrastFillHover: CSSDesignToken<Swatch> = neutralFillInverseHover;
/** @public @deprecated Use neutralFillInverseActive */
export const neutralContrastFillActive: CSSDesignToken<Swatch> = neutralFillInverseActive;
/** @public @deprecated Use neutralFillInverseFocus */
export const neutralContrastFillFocus: CSSDesignToken<Swatch> = neutralFillInverseFocus;

// Neutral Fill Input
/** @public */
export const neutralFillInputRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'neutral-fill-input-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    neutralFillInputAlgorithm(
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      neutralFillInputRestDelta.getValueFor(element),
      neutralFillInputHoverDelta.getValueFor(element),
      neutralFillInputActiveDelta.getValueFor(element),
      neutralFillInputFocusDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralFillInputRest: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-input-rest').withDefault(
  (element: HTMLElement) => neutralFillInputRecipe.getValueFor(element).evaluate(element).rest,
);
/** @public */
export const neutralFillInputHover: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-input-hover').withDefault(
  (element: HTMLElement) => neutralFillInputRecipe.getValueFor(element).evaluate(element).hover,
);
/** @public */
export const neutralFillInputFocus: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-input-focus').withDefault(
  (element: HTMLElement) => neutralFillInputRecipe.getValueFor(element).evaluate(element).focus,
);
/** @public */
export const neutralFillInputActive: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-input-active').withDefault(
  (element: HTMLElement) => neutralFillInputRecipe.getValueFor(element).evaluate(element).active,
);

// Neutral Fill Stealth
/** @public */
export const neutralFillStealthRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'neutral-fill-stealth-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    neutralFillStealthAlgorithm(
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      neutralFillStealthRestDelta.getValueFor(element),
      neutralFillStealthHoverDelta.getValueFor(element),
      neutralFillStealthActiveDelta.getValueFor(element),
      neutralFillStealthFocusDelta.getValueFor(element),
      neutralFillRestDelta.getValueFor(element),
      neutralFillHoverDelta.getValueFor(element),
      neutralFillActiveDelta.getValueFor(element),
      neutralFillFocusDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralFillStealthRest: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-stealth-rest').withDefault(
  (element: HTMLElement) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).rest,
);
/** @public */
export const neutralFillStealthHover: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-stealth-hover').withDefault(
  (element: HTMLElement) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).hover,
);
/** @public */
export const neutralFillStealthActive: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-fill-stealth-active',
).withDefault((element: HTMLElement) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).active);
/** @public */
export const neutralFillStealthFocus: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-stealth-focus').withDefault(
  (element: HTMLElement) => neutralFillStealthRecipe.getValueFor(element).evaluate(element).focus,
);

// Neutral Fill Strong
// TODO: none of these are actually used, do we need them?
/** @public */
export const neutralFillStrongRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'neutral-fill-strong-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    neutralFillContrastAlgorithm(
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      neutralFillStrongRestDelta.getValueFor(element),
      neutralFillStrongHoverDelta.getValueFor(element),
      neutralFillStrongActiveDelta.getValueFor(element),
      neutralFillStrongFocusDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralFillStrongRest: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-strong-rest').withDefault(
  (element: HTMLElement) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).rest,
);
/** @public */
export const neutralFillStrongHover: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-strong-hover').withDefault(
  (element: HTMLElement) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).hover,
);
/** @public */
export const neutralFillStrongActive: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-strong-active').withDefault(
  (element: HTMLElement) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).active,
);
/** @public */
export const neutralFillStrongFocus: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-strong-focus').withDefault(
  (element: HTMLElement) => neutralFillStrongRecipe.getValueFor(element).evaluate(element).focus,
);
/** @public @deprecated Use neutralFillStrongRest */
export const neutralFillToggleRest: CSSDesignToken<Swatch> = neutralFillStrongRest;
/** @public @deprecated Use neutralFillStrongHover */
export const neutralFillToggleHover: CSSDesignToken<Swatch> = neutralFillStrongHover;
/** @public @deprecated Use neutralFillStrongActive */
export const neutralFillToggleActive: CSSDesignToken<Swatch> = neutralFillStrongActive;
/** @public @deprecated Use neutralFillStrongFocus */
export const neutralFillToggleFocus: CSSDesignToken<Swatch> = neutralFillStrongFocus;

// Neutral Fill
/** @public */
export const neutralFillRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'neutral-fill-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement, reference?: Swatch): InteractiveSwatchSet =>
    neutralFillAlgorithm(
      neutralPalette.getValueFor(element),
      reference || fillColor.getValueFor(element),
      neutralFillRestDelta.getValueFor(element),
      neutralFillHoverDelta.getValueFor(element),
      neutralFillActiveDelta.getValueFor(element),
      neutralFillFocusDelta.getValueFor(element),
    ),
});
/** @public */
export const neutralFillRest: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-rest').withDefault(
  (element: HTMLElement) => neutralFillRecipe.getValueFor(element).evaluate(element).rest,
);
/** @public */
export const neutralFillHover: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-hover').withDefault(
  (element: HTMLElement) => neutralFillRecipe.getValueFor(element).evaluate(element).hover,
);
/** @public */
export const neutralFillActive: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-active').withDefault(
  (element: HTMLElement) => neutralFillRecipe.getValueFor(element).evaluate(element).active,
);
/** @public */
export const neutralFillFocus: CSSDesignToken<Swatch> = create<Swatch>('neutral-fill-focus').withDefault(
  (element: HTMLElement) => neutralFillRecipe.getValueFor(element).evaluate(element).focus,
);

// Focus Stroke Outer
/** @public */
export const focusStrokeOuterRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'focus-stroke-outer-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    focusStrokeOuterAlgorithm(neutralPalette.getValueFor(element), fillColor.getValueFor(element)),
});

/** @public */
export const focusStrokeOuter: CSSDesignToken<Swatch> = create<Swatch>(
  'focus-stroke-outer',
).withDefault((element: HTMLElement) => focusStrokeOuterRecipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use focusStrokeOuter */
export const neutralFocus: CSSDesignToken<Swatch> = focusStrokeOuter;

// Focus Stroke Inner
/** @public */
export const focusStrokeInnerRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'focus-stroke-inner-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    focusStrokeInnerAlgorithm(
      accentPalette.getValueFor(element),
      fillColor.getValueFor(element),
      focusStrokeOuter.getValueFor(element),
    ),
});

/** @public */
export const focusStrokeInner: CSSDesignToken<Swatch> = create<Swatch>(
  'focus-stroke-inner',
).withDefault((element: HTMLElement) => focusStrokeInnerRecipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use focusStrokeInner */
export const neutralFocusInnerAccent: CSSDesignToken<Swatch> = focusStrokeInner;

// Neutral Foreground Hint
/** @public */
export const neutralForegroundHintRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-foreground-hint-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralForegroundHintAlgorithm(neutralPalette.getValueFor(element), fillColor.getValueFor(element)),
});

/** @public */
export const neutralForegroundHint: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-foreground-hint',
).withDefault((element: HTMLElement) => neutralForegroundHintRecipe.getValueFor(element).evaluate(element));

// Neutral Foreground
/** @public */
export const neutralForegroundRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-foreground-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralForegroundAlgorithm(neutralPalette.getValueFor(element), fillColor.getValueFor(element)),
});

/** @public */
export const neutralForegroundRest: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-foreground-rest',
).withDefault((element: HTMLElement) => neutralForegroundRecipe.getValueFor(element).evaluate(element));

// Neutral Stroke
/** @public */
export const neutralStrokeRecipe: DesignToken<InteractiveColorRecipe> = create<InteractiveColorRecipe>({
  name: 'neutral-stroke-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): InteractiveSwatchSet => {
    return neutralStrokeAlgorithm(
      neutralPalette.getValueFor(element),
      fillColor.getValueFor(element),
      neutralStrokeRestDelta.getValueFor(element),
      neutralStrokeHoverDelta.getValueFor(element),
      neutralStrokeActiveDelta.getValueFor(element),
      neutralStrokeFocusDelta.getValueFor(element),
    );
  },
});

/** @public */
export const neutralStrokeRest: CSSDesignToken<Swatch> = create<Swatch>('neutral-stroke-rest').withDefault(
  (element: HTMLElement) => neutralStrokeRecipe.getValueFor(element).evaluate(element).rest,
);
/** @public */
export const neutralStrokeHover: CSSDesignToken<Swatch> = create<Swatch>('neutral-stroke-hover').withDefault(
  (element: HTMLElement) => neutralStrokeRecipe.getValueFor(element).evaluate(element).hover,
);
/** @public */
export const neutralStrokeActive: CSSDesignToken<Swatch> = create<Swatch>('neutral-stroke-active').withDefault(
  (element: HTMLElement) => neutralStrokeRecipe.getValueFor(element).evaluate(element).active,
);
/** @public */
export const neutralStrokeFocus: CSSDesignToken<Swatch> = create<Swatch>('neutral-stroke-focus').withDefault(
  (element: HTMLElement) => neutralStrokeRecipe.getValueFor(element).evaluate(element).focus,
);
/** @public @deprecated Use neutralStrokeRest */
export const neutralOutlineRest: CSSDesignToken<Swatch> = neutralStrokeRest;
/** @public @deprecated Use neutralStrokeHover */
export const neutralOutlineHover: CSSDesignToken<Swatch> = neutralStrokeHover;
/** @public @deprecated Use neutralStrokeActive */
export const neutralOutlineActive: CSSDesignToken<Swatch> = neutralStrokeActive;
/** @public @deprecated Use neutralStrokeFocus */
export const neutralOutlineFocus: CSSDesignToken<Swatch> = neutralStrokeFocus;

// Neutral Layer Card Container
/** @public */
export const neutralLayerCardContainerRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-layer-card-container-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralLayerCardContainerAlgorithm(
      neutralPalette.getValueFor(element),
      baseLayerLuminance.getValueFor(element),
      neutralFillLayerRestDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralLayerCardContainer: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-layer-card-container',
).withDefault((element: HTMLElement) => neutralLayerCardContainerRecipe.getValueFor(element).evaluate(element));

// Neutral Layer Floating
/** @public */
export const neutralLayerFloatingRecipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-layer-floating-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralLayerFloatingAlgorithm(
      neutralPalette.getValueFor(element),
      baseLayerLuminance.getValueFor(element),
      neutralFillLayerRestDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralLayerFloating: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-layer-floating',
).withDefault((element: HTMLElement) => neutralLayerFloatingRecipe.getValueFor(element).evaluate(element));

// Neutral Layer 1
/** @public */
export const neutralLayer1Recipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-layer-1-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralLayer1Algorithm(neutralPalette.getValueFor(element), baseLayerLuminance.getValueFor(element)),
});

/** @public */
export const neutralLayer1: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-layer-1',
).withDefault((element: HTMLElement) => neutralLayer1Recipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use neutralLayer1 */
export const neutralLayerL1: CSSDesignToken<Swatch> = neutralLayer1;

// Neutral Layer 2
/** @public */
export const neutralLayer2Recipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-layer-2-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralLayer2Algorithm(
      neutralPalette.getValueFor(element),
      baseLayerLuminance.getValueFor(element),
      neutralFillLayerRestDelta.getValueFor(element),
      neutralFillRestDelta.getValueFor(element),
      neutralFillHoverDelta.getValueFor(element),
      neutralFillActiveDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralLayer2: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-layer-2',
).withDefault((element: HTMLElement) => neutralLayer2Recipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use neutralLayer2 */
export const neutralLayerL2 = neutralLayer2;

// Neutral Layer 3
/** @public */
export const neutralLayer3Recipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-layer-3-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralLayer3Algorithm(
      neutralPalette.getValueFor(element),
      baseLayerLuminance.getValueFor(element),
      neutralFillLayerRestDelta.getValueFor(element),
      neutralFillRestDelta.getValueFor(element),
      neutralFillHoverDelta.getValueFor(element),
      neutralFillActiveDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralLayer3: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-layer-3',
).withDefault((element: HTMLElement) => neutralLayer3Recipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use neutralLayer3 */
export const neutralLayerL3: CSSDesignToken<Swatch> = neutralLayer3;

// Neutral Layer 4
/** @public */
export const neutralLayer4Recipe: DesignToken<ColorRecipe> = create<ColorRecipe>({
  name: 'neutral-layer-4-recipe',
  cssCustomPropertyName: null,
}).withDefault({
  evaluate: (element: HTMLElement): Swatch =>
    neutralLayer4Algorithm(
      neutralPalette.getValueFor(element),
      baseLayerLuminance.getValueFor(element),
      neutralFillLayerRestDelta.getValueFor(element),
      neutralFillRestDelta.getValueFor(element),
      neutralFillHoverDelta.getValueFor(element),
      neutralFillActiveDelta.getValueFor(element),
    ),
});

/** @public */
export const neutralLayer4: CSSDesignToken<Swatch> = create<Swatch>(
  'neutral-layer-4',
).withDefault((element: HTMLElement) => neutralLayer4Recipe.getValueFor(element).evaluate(element));
/** @public @deprecated Use neutralLayer4 */
export const neutralLayerL4: CSSDesignToken<Swatch> = neutralLayer4;
