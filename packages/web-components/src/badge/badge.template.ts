import { ElementViewTemplate, html, slotted } from '@microsoft/fast-element';
import type { Badge } from './badge.js';

export const template: ElementViewTemplate<Badge> = html<Badge>`
  <template>
    <slot name="start"></slot>
    <slot ${slotted('defaultSlottedContent')}></slot>
    <slot name="end"></slot>
  </template>
`;
