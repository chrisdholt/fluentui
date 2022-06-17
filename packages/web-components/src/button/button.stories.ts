
import { html } from '@microsoft/fast-element';
import { FoundationElement } from '@microsoft/fast-foundation';
import addons from '@storybook/addons';
import { DOCS_RENDERED } from '@storybook/core-events';
import { provideFluentDesignSystem } from '../fluent-design-system';
import { fluentButton } from './index';

const template = html<TestCard>`<fluent-card> Test </fluent-card>`;

class TestCard extends FoundationElement {}

const testCard = TestCard.compose({
  baseName: 'test-card',
  template,
});

provideFluentDesignSystem().register(testCard());

addons.getChannel().addListener(DOCS_RENDERED, (name: string) => {
  if (name.toLowerCase().includes('button')) {
    document.getElementById('one')?.addEventListener('click', () => {
      const cards = document.getElementById('cards')!;
      const card = document.createElement('fluent-test-card') as TestCard;
      cards.append(card);
    });
  }
});

export default {
  title: 'Components/Button',
  component: fluentButton,
  argTypes: {
    appearance: {
      description: 'This controls the basic appearances',
      control: { type: 'select' },
      options: ['neutral', 'accent', 'lightweight', 'outline', 'stealth'],
      default: 'neutral',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const ButtonTemplate = ({ appearance, disabled, label }) =>
  `
    <fluent-button
      id="one"
      ${disabled ? 'disabled' : ''}
      ${appearance ? `appearance="${appearance}"` : ''}
    >
      ${label}
    </fluent-button>
    <div id="cards"></div>
  `;

export const Button = ButtonTemplate.bind({});

Button.args = {
  label: 'Button',
  disabled: false,
  appearance: 'accent',
};

const example = `
<fluent-button appearance="accent">Button</fluent-button>
`;

Button.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};
