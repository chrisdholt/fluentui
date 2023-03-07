import { attr } from '@microsoft/fast-element';
import { FASTRadioGroup } from '@microsoft/fast-foundation';

/**
 * The base class used for constructing a fluent-radio-group custom element
 * @public
 */
export class RadioGroup extends FASTRadioGroup {
  /**
   * Describes the ID of the element that labels the current element, as used for accessibility with screen readers.
   *
   * @public
   * @remarks
   * HTML Attribute: aria-labelledby
   */
  @attr({ attribute: 'aria-labelledby' })
  public ariaLabelledby: string = '';

  /**
   * sets radio layout styles
   *
   * @public
   * @remarks
   * HTML Attribute: stacked
   */
  @attr({ attribute: 'stacked', mode: 'boolean' })
  public stacked: boolean = false;

  protected layoutChanged(): void {
    if (!this.$fastController.isConnected) {
      return;
    }
    if (this.slottedRadioButtons !== undefined) {
      this.slottedRadioButtons.forEach((item: HTMLElement, index: number) => {
        if (this.stacked && this.orientation === 'horizontal') {
          item.setAttribute('stack', '');
        } else {
          item.removeAttribute('stack');
        }
      });
    }
  }

  protected disableChanged(): void {
    console.log('disableChanged');
    if (!this.$fastController.isConnected) {
      return;
    }
    this.slottedRadioButtons.forEach((item: HTMLElement, index: number) => {
      if (this.disabled) {
        item.setAttribute('disabled', '');
      }
    });
  }

  protected slottedRadioButtonsChanged(oldValue: HTMLElement[], newValue: HTMLElement[]): void {
    super.slottedRadioButtonsChanged(oldValue, newValue);
    console.log('slottedRadioButtonsChanged');
    if (this.disabled) {
      console.log('slottedRadioButtonsChanged: disabled');
      this.disableChanged();
    }
    if (this.stacked) {
      console.log('slottedRadioButtonsChanged: layoutChanged');

      this.layoutChanged();
    }
  }
}
