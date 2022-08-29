import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../__test__/helpers.js';
import type { Text as FluentText } from './text.js';
import './define.js';

type TextStoryArgs = Args & FluentText;
type TextStoryMeta = Meta<TextStoryArgs>;

/**
 * Used to generate slotted content for stories
 * @param as - the element to generate
 * @param content - the content for the element
 * @returns ViewTemplate
 */
const generateSemanticElementTemplate = (as: string, content) => {
  switch (as) {
    case 'h1':
      return html`<h1>${content}</h1>`;
    case 'h2':
      return html`<h2>${content}</h2>`;
    case 'h3':
      return html`<h3>${content}</h3>`;
    case 'h4':
      return html`<h4>${content}</h4>`;
    case 'h5':
      return html`<h5>${content}</h5>`;
    case 'h6':
      return html`<h6>${content}</h6>`;
    case 'p':
      return html`<p>${content}</p>`;
    case 'pre':
      return html`<pre>${content}</pre>`;
    case 'span':
    default:
      return html`<span>${content}</span>`;
  }
};

const storyTemplate = html<TextStoryArgs>`
  <fluent-text align=${x => x.align} font=${x => x.font} size=${x => x.size} weight=${x => x.weight}
    >${x => generateSemanticElementTemplate(x.as, x.content)}</fluent-text
  >
`;

export default {
  title: 'Components/Text',
  args: {
    content: 'Text',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'span'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
      control: {
        type: 'select',
      },
    },
    weight: {
      options: ['medium', 'regular', 'semibold'],
      control: {
        type: 'select',
      },
    },
    align: {
      options: ['start', 'end', 'center', 'justify'],
      control: {
        type: 'select',
      },
    },
    font: {
      options: ['base', 'numeric', 'monospace'],
      control: {
        type: 'select',
      },
    },
  },
} as TextStoryMeta;

export const Text = renderComponent(storyTemplate).bind({});
