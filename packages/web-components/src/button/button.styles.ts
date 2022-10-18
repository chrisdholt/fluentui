import { css } from '@microsoft/fast-element';
import {
  display,
} from '@microsoft/fast-foundation';
import { borderRadiusCircular, borderRadiusLarge, borderRadiusMedium, borderRadiusNone, borderRadiusSmall, colorBrandBackground, colorBrandBackgroundHover, colorBrandBackgroundPressed, colorNeutralBackground1, colorNeutralBackground1Hover, colorNeutralBackground1Pressed, colorNeutralBackgroundDisabled, colorNeutralForeground1, colorNeutralForeground2, colorNeutralForeground2BrandHover, colorNeutralForeground2BrandPressed, colorNeutralForegroundDisabled, colorNeutralForegroundOnBrand, colorNeutralStroke1, colorNeutralStroke1Hover, colorNeutralStroke1Pressed, colorNeutralStrokeDisabled, colorSubtleBackground, colorSubtleBackgroundHover, colorSubtleBackgroundPressed, colorTransparentBackground, colorTransparentBackgroundHover, colorTransparentBackgroundPressed, fontFamilyBase, fontSizeBase200, fontSizeBase300, fontWeightRegular, fontWeightSemibold, lineHeightBase200, lineHeightBase300, strokeWidthThin } from '../design-tokens.js';

export const styles = css`
    ${display("inline-block")}

    :host {
        --button-border-color: ${colorNeutralStroke1};
        --button-border-right-color: var(--button-border-color);
        --button-border-left-color: var(--button-border-color);
        --button-border-radius: ${borderRadiusMedium};
        --border-top-right-radius: var(--button-border-radius);
        --border-top-left-radius: var(--button-border-radius);
        --border-bottom-right-radius: var(--button-border-radius);
        --border-bottom-left-radius: var(--button-border-radius);
        border: none;
    }

    .control {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        margin: 0;
        overflow: hidden;
        background-color: ${colorNeutralBackground1};
        color: ${colorNeutralForeground1};
        border-width: ${strokeWidthThin};
        border-style: solid;
        font-family: ${fontFamilyBase};
        outline-style: none;
        border-color: var(--button-border-color);
        border-right-color: var(--button-border-right-color);
        border-left-color: var(--button-border-left-color);
        border-top-right-radius: var(--border-top-right-radius);
        border-top-left-radius: var(--border-top-left-radius);
        border-bottom-right-radius: var(--border-bottom-right-radius);
        border-bottom-left-radius: var(--border-bottom-left-radius);
    }

    :host(:hover) {
       --button-border-color: ${colorNeutralStroke1Hover};
    }

    :host(:active) {
        --button-border-color: ${colorNeutralStroke1Pressed};
    }

    :host .control {
      gap: 6px;
      padding: 0 12px;
      height: 32px;
      min-width: 96px;
      font-size: ${fontSizeBase300};
      font-weight: ${fontWeightSemibold};
      line-height: ${lineHeightBase300};
    }

    :host([icon-only]) .control {
        padding: 0;
        min-width: 32px;
        max-width: 32px;
    }

    :host(:hover) .control {
        background-color: ${colorNeutralBackground1Hover};
        color: ${colorNeutralForeground1};
        cursor: pointer;
    }

    :host(:active) .control {
        background-color: ${colorNeutralBackground1Pressed};
        color: ${colorNeutralForeground1};
        outline-style: none;
    }

    :host([size][shape="circular"]) {
        --button-border-radius: ${borderRadiusCircular};
    }

    :host([size][shape="square"]) {
        --button-border-radius: ${borderRadiusNone};
    }

    :host([disabled]),
    :host([disabled]:active),
    :host([disabled]:hover) {
        --button-border-color: ${colorNeutralStrokeDisabled};
    }

    :host([disabled]) .control,
    :host .control[aria-disabled="true"] {
        background-color: ${colorNeutralBackgroundDisabled};
        color: ${colorNeutralForegroundDisabled};
        cursor: not-allowed;
    }

    ::slotted(svg),
    slot > svg {
        font-size: 20px;
        height: 20px;
        width: 20px;
        fill: currentColor;
    }

    :host([appearance="primary"]),
    :host([appearance="primary"]:hover),
    :host([appearance="primary"]:active) {
        --button-border-color: transparent;
    }

    :host([appearance="primary"]) .control,
    :host([appearance="primary"]:hover) .control,
    :host([appearance="primary"]:active) .control {
        border-color: inherit;
    }

    :host([appearance="primary"]) .control {
        background-color: ${colorBrandBackground};
        color: ${colorNeutralForegroundOnBrand};
    }

    :host([appearance="primary"]:hover) .control {
        background-color: ${colorBrandBackgroundHover};
        color: ${colorNeutralForegroundOnBrand};
    }

    :host([appearance="primary"]:active) .control {
        background-color: ${colorBrandBackgroundPressed};
        color: ${colorNeutralForegroundOnBrand};
    }

    :host([appearance="primary"][disabled]) .control,
    :host([appearance="primary"][disabled]:hover) .control,
    :host([appearance="primary"][disabled]:active) .control,
    :host([appearance="primary"]) .control[aria-disabled="true"],
    :host([appearance="primary"]:hover) .control[aria-disabled="true"],
    :host([appearance="primary"]:active) .control[aria-disabled="true"] {
        background-color: ${colorNeutralBackgroundDisabled};
        border-color: ${colorNeutralStrokeDisabled};
        color: ${colorNeutralForegroundDisabled};
        cursor: not-allowed;
    }

    :host([appearance="subtle"]),
    :host([appearance="subtle"]:hover),
    :host([appearance="subtle"]:active) {
        --button-border-color: transparent;
    }

    :host([appearance="subtle"]) .control {
        background-color: ${colorSubtleBackground};
        color: ${colorNeutralForeground2};
    }

    :host([appearance="subtle"]:hover) .control {
        background-color: ${colorSubtleBackgroundHover};
        color: ${colorNeutralForeground2BrandHover};
    }

    :host([appearance="subtle"]:active) .control {
        background-color: ${colorSubtleBackgroundPressed};
        color: ${colorNeutralForeground2BrandPressed};
    }

    :host([appearance="subtle"][disabled]) .control,
    :host([appearance="subtle"][disabled]:hover) .control,
    :host([appearance="subtle"][disabled]:active) .control {
        color: ${colorNeutralForegroundDisabled};
        cursor: not-allowed;
        background-color: transparent;
        border-color: transparent;
    }

    :host([appearance="outline"]) .control {
      background-color: ${colorTransparentBackground};
    }

    :host([appearance="outline"]:hover) .control {
        background-color: ${colorTransparentBackgroundHover};
    }

    :host([appearance="outline"]:active) .control {
        background-color: ${colorTransparentBackgroundPressed};
    }

    :host([appearance="transparent"]),
    :host([appearance="transparent"]:hover),
    :host([appearance="transparent"]:active) {
        --button-border-color: transparent;
    }
    :host([appearance="transparent"]) .control {
        background-color: ${colorTransparentBackground};
        color: ${colorNeutralForeground2};
    }

    :host([appearance="transparent"]:hover) .control {
        background-color: ${colorTransparentBackgroundHover};
        color: ${colorNeutralForeground2BrandHover};
    }

    :host([appearance="transparent"]:active) .control {
        background-color: ${colorTransparentBackgroundPressed};
        color: ${colorNeutralForeground2BrandPressed};
    }

    :host([appearance="transparent"][disabled]) .control,
    :host([appearance="transparent"][disabled]:hover) .control,
    :host([appearance="transparent"][disabled]:active) .control {
        background-color: transparent;
        border-color: transparent;
        color: ${colorNeutralForegroundDisabled};
    }

    :host([size="small"]) .control {
        --button-border-radius: ${borderRadiusSmall};
        gap: 4px;
        padding: 0 8px;
        height: 24px;
        min-width: 64px;
        font-size: ${fontSizeBase200};
        font-weight: ${fontWeightRegular};
        line-height: ${lineHeightBase200};
    }

    :host([size="small"][icon-only]) .control {
        padding: 4px;
        min-width: 28px;
        max-width: 28px;
    }

    :host([size="large"]) .control {
        --button-border-radius: ${borderRadiusLarge};
        gap: 6px;
        padding: 0 16px;
        height: 40px;
        min-width: 96px;
        font-size: ${fontSizeBase300};
        font-weight: ${fontWeightSemibold};
        line-height: ${lineHeightBase300};
    }

    :host([size="large"]) slot > svg,
    :host([size="large"]) ::slotted(svg) {
        font-size: 24px;
        height: 24px;
        width: 24px;
    }

    :host([size="large"][icon-only]) .control {
        padding: 0;
        min-width: 40px;
        max-width: 40px;
    }
  `
