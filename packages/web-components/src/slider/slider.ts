import { attr, css, FASTElement, nullableNumberConverter, observable, Observable } from '@microsoft/fast-element';
import type { ElementStyles } from '@microsoft/fast-element';
import {
  Direction,
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyEnd,
  keyHome,
  limit,
  Orientation,
} from '@microsoft/fast-web-utilities';
import { getDirection } from '../utils/index.js';
import { SliderConfiguration, SliderMode, SliderSize } from './slider.options.js';
import { convertPixelToPercent } from './slider-utilities.js';

/**
 * The base class used for constructing a fluent-slider custom element
 * @public
 */
export class Slider extends FASTElement implements SliderConfiguration {
  /**
   * The internal {@link https://developer.mozilla.org/docs/Web/API/ElementInternals | `ElementInternals`} instance for the component.
   *
   * @internal
   */
  public elementInternals: ElementInternals = this.attachInternals();

  /**
   * The form-associated flag.
   * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-face-example | Form-associated custom elements}
   *
   * @public
   */
  public static formAssociated = true;

  /**
   * A reference to all associated `<label>` elements.
   *
   * @public
   */
  public get labels(): ReadonlyArray<Node> {
    return Object.freeze(Array.from(this.elementInternals.labels));
  }

  /**
   * The size of the slider
   * @public
   * @remarks
   * HTML Attribute: size
   */
  @attr
  public size?: SliderSize;

  public handleChange(source: any, propertyName: string): void {
    switch (propertyName) {
      case 'min':
      case 'max':
      case 'step':
        this.handleStepStyles();
        break;
      default:
        break;
    }
  }

  private stepStyles?: ElementStyles;

  /**
   * Handles changes to step styling based on the step value
   * NOTE: This function is not a changed callback, stepStyles is not observable
   */
  private handleStepStyles(): void {
    if (this.step) {
      const totalSteps = (100 / Math.floor((this._max - this._min) / this.step)) as any;

      if (this.stepStyles !== undefined) {
        this.$fastController.removeStyles(this.stepStyles);
      }

      this.stepStyles = css/**css*/ `
        :host {
          --step-rate: ${totalSteps}%;
          color: blue;
        }
      `;

      this.$fastController.addStyles(this.stepStyles);
    } else if (this.stepStyles !== undefined) {
      this.$fastController.removeStyles(this.stepStyles);
    }
  }

  /**
   * When true, the control will be immutable by user interaction. See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
   *
   * @public
   * @remarks
   * HTML Attribute: readonly
   */
  @attr({ attribute: 'readonly', mode: 'boolean' })
  public readOnly!: boolean; // Map to proxy element
  protected readOnlyChanged(): void {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.readOnly = this.readOnly;
    }
  }

  /**
   * The initial value of the input.
   *
   * @public
   * @remarks
   * HTML Attribute: `value`
   */
  @attr({ attribute: 'value', mode: 'fromView' })
  public initialValue: string = 'on';

  /**
   * Sets the value of the input when the value attribute changes.
   *
   * @param prev - The previous value
   * @param next - The current value
   * @internal
   */
  public initialValueChanged(prev: string, next: string): void {
    this._value = next;
  }

  /**
   * The element's validity state.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/validity | `ElementInternals.validity`} property.
   */
  public get validity(): ValidityState {
    return this.elementInternals.validity;
  }

  /**
   * The internal value of the input.
   *
   * @internal
   */
  private _value: string = this.initialValue;

  /**
   * The current value of the input.
   *
   * @public
   */
  public get value(): string {
    Observable.track(this, 'value');
    return this._value;
  }

  public set value(value: string) {
    this._value = value;

    if (this.$fastController.isConnected) {
      this.setFormValue(value);
      this.setValidity();
      Observable.notify(this, 'value');
    }
  }

  /**
   * Resets the form value to its initial value when the form is reset.
   *
   * @internal
   */
  formResetCallback(): void {
    this.checked = this.initialChecked ?? false;
    this.dirtyChecked = false;
    this.indeterminate = false;
    this.setValidity();
  }

  /**
   * Reports the validity of the element.
   *
   * @public
   * @remarks
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/reportValidity | `HTMLInputElement.reportValidity()`} method.
   */
  public reportValidity(): boolean {
    return this.elementInternals.reportValidity();
  }

  /**
   * Reflects the {@link https://developer.mozilla.org/docs/Web/API/ElementInternals/setFormValue | `ElementInternals.setFormValue()`} method.
   *
   * @internal
   */
  public setFormValue(value: File | string | FormData | null, state?: File | string | FormData | null): void {
    this.elementInternals.setFormValue(value, value ?? state);
  }

  /**
   * Sets a custom validity message.
   *
   * @param message - The message to set
   * @public
   */
  public setCustomValidity(message: string): void {
    this.elementInternals.setValidity({ customError: true }, message);
    this.setValidity();
  }

  /**
   * Sets the validity of the control.
   *
   * @param flags - Validity flags to set.
   * @param message - Optional message to supply. If not provided, the control's `validationMessage` will be used.
   * @param anchor - Optional anchor to use for the validation message.
   *
   * @internal
   */
  public setValidity(
    flags: Partial<ValidityState> = { valueMissing: !!this.required && !this.checked },
    message: string = this.validationMessage,
    anchor?: HTMLElement,
  ): void {
    if (this.$fastController.isConnected) {
      if (this.disabled) {
        this.elementInternals.setValidity({});
        return;
      }

      this.elementInternals.setValidity(flags, message, anchor);
    }
  }

  /**
   * @internal
   */
  public track!: HTMLDivElement;

  /**
   * @internal
   */
  public thumb!: HTMLDivElement;

  /**
   * @internal
   */
  public stepMultiplier!: number;

  /**
   * @internal
   */
  @observable
  public direction: Direction = Direction.ltr;

  /**
   * @internal
   */
  @observable
  public isDragging: boolean = false;

  /**
   * @internal
   */
  @observable
  public position!: string;

  /**
   * @internal
   */
  @observable
  public trackWidth: number = 0;

  /**
   * @internal
   */
  @observable
  public trackMinWidth: number = 0;

  /**
   * @internal
   */
  @observable
  public trackHeight: number = 0;

  /**
   * @internal
   */
  @observable
  public trackLeft: number = 0;

  /**
   * @internal
   */
  @observable
  public trackMinHeight: number = 0;

  /**
   * The value property, typed as a number.
   *
   * @public
   */
  public get valueAsNumber(): number {
    return parseFloat(this.value);
  }

  public set valueAsNumber(next: number) {
    this.value = next.toString();
  }

  /**
   * Returns the min property or the default value
   *
   * @public
   */
  public get _min(): number {
    return this.min ?? 0;
  }

  /**
   * Returns the max property or the default value
   *
   * @public
   */
  public get _max(): number {
    return this.max ?? 100;
  }

  /**
   * Custom function that generates a string for the component's "aria-valuetext" attribute based on the current value.
   *
   * @public
   */
  @observable
  public valueTextFormatter: (value: string) => string | null = () => null;

  /**
   * @internal
   */
  public valueChanged(previous: string, next: string): void {
    if (this.$fastController.isConnected) {
      const nextAsNumber = parseFloat(next);
      const value = limit(this._min, this._max, this.convertToConstrainedValue(nextAsNumber)).toString();

      if (value !== next) {
        this.value = value;
        return;
      }

      super.valueChanged(previous, next);

      this.setThumbPositionForOrientation(this.direction);

      this.$emit('change');
    }
  }

  /**
   * The minimum allowed value.
   *
   * @defaultValue - 0
   * @public
   * @remarks
   * HTML Attribute: min
   */
  @attr({ converter: nullableNumberConverter })
  public min!: number; // Map to proxy element.
  protected minChanged(): void {
    this.validate();
  }

  /**
   * The maximum allowed value.
   *
   * @defaultValue - 10
   * @public
   * @remarks
   * HTML Attribute: max
   */
  @attr({ converter: nullableNumberConverter })
  public max: number = 10; // Map to proxy element.
  protected maxChanged(): void {
    this.validate();
  }

  /**
   * Value to increment or decrement via arrow keys, mouse click or drag.
   *
   * @public
   * @remarks
   * HTML Attribute: step
   */
  @attr({ converter: nullableNumberConverter })
  public step: number | undefined;
  protected stepChanged(): void {
    if (this.proxy instanceof HTMLInputElement) {
      this.proxy.step = `${this.step}`;
    }

    this.updateStepMultiplier();
    this.validate();
  }

  /**
   * The orientation of the slider.
   *
   * @public
   * @remarks
   * HTML Attribute: orientation
   */
  @attr
  public orientation: Orientation = Orientation.horizontal;
  protected orientationChanged(): void {
    if (this.$fastController.isConnected) {
      this.setThumbPositionForOrientation(this.direction);
    }
  }

  /**
   * The selection mode.
   *
   * @public
   * @remarks
   * HTML Attribute: mode
   */
  @attr
  public mode: SliderMode = SliderMode.singleValue;

  constructor() {
    super();

    this.elementInternals.role = 'slider';
  }

  /**
   * @internal
   */
  public connectedCallback(): void {
    super.connectedCallback();

    this.direction = getDirection(this);
    this.updateStepMultiplier();
    this.setupTrackConstraints();
    this.setupListeners();
    this.setupDefaultValue();
    this.setThumbPositionForOrientation(this.direction);

    Observable.getNotifier(this).subscribe(this, 'max');
    Observable.getNotifier(this).subscribe(this, 'min');
    Observable.getNotifier(this).subscribe(this, 'step');

    this.handleStepStyles();
  }

  /**
   * @internal
   */
  public disconnectedCallback(): void {
    super.disconnectedCallback();

    this.setupListeners(true);

    Observable.getNotifier(this).unsubscribe(this, 'max');
    Observable.getNotifier(this).unsubscribe(this, 'min');
    Observable.getNotifier(this).unsubscribe(this, 'step');
  }

  /**
   * Increment the value by the step
   *
   * @public
   */
  public increment(): void {
    const newVal: number =
      this.direction !== Direction.rtl && this.orientation !== Orientation.vertical
        ? Number(this.value) + Number(this.stepValue)
        : Number(this.value) + Number(this.stepValue);
    const incrementedVal: number = this.convertToConstrainedValue(newVal);
    const incrementedValString: string = incrementedVal < this._max ? `${incrementedVal}` : `${this._max}`;
    this.value = incrementedValString;
  }

  /**
   * Decrement the value by the step
   *
   * @public
   */
  public decrement(): void {
    const newVal =
      this.direction !== Direction.rtl && this.orientation !== Orientation.vertical
        ? Number(this.value) - Number(this.stepValue)
        : Number(this.value) - Number(this.stepValue);
    const decrementedVal: number = this.convertToConstrainedValue(newVal);
    const decrementedValString: string = decrementedVal > this._min ? `${decrementedVal}` : `${this._min}`;
    this.value = decrementedValString;
  }

  public keypressHandler = (e: KeyboardEvent): void => {
    if (this.readOnly || this.disabled) {
      return;
    }

    if (e.key === keyHome) {
      e.preventDefault();
      this.value =
        this.direction !== Direction.rtl && this.orientation !== Orientation.vertical ? `${this._min}` : `${this._max}`;
    } else if (e.key === keyEnd) {
      e.preventDefault();
      this.value =
        this.direction !== Direction.rtl && this.orientation !== Orientation.vertical ? `${this._max}` : `${this._min}`;
    } else if (!e.shiftKey) {
      switch (e.key) {
        case keyArrowRight:
        case keyArrowUp:
          e.preventDefault();
          this.increment();
          break;
        case keyArrowLeft:
        case keyArrowDown:
          e.preventDefault();
          this.decrement();
          break;
      }
    }
  };

  /**
   * Gets the actual step value for the slider
   *
   */
  private get stepValue(): number {
    return this.step === undefined ? 1 : this.step;
  }

  /**
   * Places the thumb based on the current value
   *
   * @public
   * @param direction - writing mode
   */
  private setThumbPositionForOrientation(direction: Direction): void {
    const newPct: number = convertPixelToPercent(Number(this.value), this._min, this._max, direction);
    const percentage: number = (1 - newPct) * 100;

    this.position = `--slider-progress: calc(100% - ${percentage}%);`;
  }

  /**
   * Update the step multiplier used to ensure rounding errors from steps that
   * are not whole numbers
   */
  private updateStepMultiplier(): void {
    const stepString: string = this.stepValue + '';
    const decimalPlacesOfStep: number = !!(this.stepValue % 1) ? stepString.length - stepString.indexOf('.') - 1 : 0;
    this.stepMultiplier = Math.pow(10, decimalPlacesOfStep);
  }

  private setupTrackConstraints = (): void => {
    const clientRect: DOMRect = this.track.getBoundingClientRect();
    this.trackWidth = this.track.clientWidth;
    this.trackMinWidth = this.track.clientLeft;
    this.trackHeight = clientRect.top;
    this.trackMinHeight = clientRect.bottom;
    this.trackLeft = this.getBoundingClientRect().left;
    if (this.trackWidth === 0) {
      this.trackWidth = 1;
    }
  };

  private setupListeners = (remove: boolean = false): void => {
    //TODO Bug: https://github.com/microsoft/fluentui/issues/30087
    this.addEventListener('keydown', this.keypressHandler);

    if (remove) {
      this.removeEventListener('keydown', this.keypressHandler);
    }
  };

  /**
   * @internal
   */
  public initialValue: string = '';

  private get midpoint(): string {
    return `${this.convertToConstrainedValue((this._max + this._min) / 2)}`;
  }

  private setupDefaultValue(): void {
    if (typeof this.value === 'string') {
      if (this.value.length === 0) {
        this.initialValue = this.midpoint;
      } else {
        const value = parseFloat(this.value);

        if (!Number.isNaN(value) && (value < this._min || value > this._max)) {
          this.value = this.midpoint;
        }
      }
    }
  }

  /**
   *  Handle mouse moves during a thumb drag operation
   *  If the event handler is null it removes the events
   */
  public handleThumbPointerDown = (event: PointerEvent | null): void => {
    const windowFn = event !== null ? window.addEventListener : window.removeEventListener;
    windowFn('pointerup', this.handleWindowPointerUp);
    windowFn('pointermove', this.handlePointerMove, { passive: true });
    windowFn('touchmove', this.handlePointerMove, { passive: true });
    windowFn('touchend', this.handleWindowPointerUp);
    this.isDragging = event !== null;
  };

  /**
   *  Handle mouse moves during a thumb drag operation
   */
  private handlePointerMove = (e: PointerEvent | TouchEvent | Event): void => {
    if (this.readOnly || this.disabled || e.defaultPrevented) {
      return;
    }
    // update the value based on current position
    const sourceEvent = window.TouchEvent && e instanceof TouchEvent ? e.touches[0] : (e as PointerEvent);
    const eventValue: number =
      this.orientation === Orientation.horizontal
        ? sourceEvent.pageX - document.documentElement.scrollLeft - this.trackLeft
        : sourceEvent.pageY - document.documentElement.scrollTop;

    this.value = `${this.calculateNewValue(eventValue)}`;
  };

  /**
   * Calculate the new value based on the given raw pixel value.
   *
   * @param rawValue - the value to be converted to a constrained value
   * @returns the constrained value
   *
   * @internal
   */
  public calculateNewValue(rawValue: number): number {
    this.setupTrackConstraints();

    // update the value based on current position
    const newPosition = convertPixelToPercent(
      rawValue,
      this.orientation === Orientation.horizontal ? this.trackMinWidth : this.trackMinHeight,
      this.orientation === Orientation.horizontal ? this.trackWidth : this.trackHeight,
      this.direction,
    );
    const newValue: number = (this._max - this._min) * newPosition + this._min;
    return this.convertToConstrainedValue(newValue);
  }

  /**
   * Handle a window mouse up during a drag operation
   */
  private handleWindowPointerUp = (event: Event): void => {
    this.stopDragging();
  };

  private stopDragging = (): void => {
    this.isDragging = false;
    this.handlePointerDown(null);
    this.handleThumbPointerDown(null);
  };

  /**
   *
   * @param e - PointerEvent or null. If there is no event handler it will remove the events
   */
  public handlePointerDown = (e: PointerEvent | null) => {
    if (e === null || (!this.disabled && !this.readOnly)) {
      const windowFn = e !== null ? window.addEventListener : window.removeEventListener;
      const documentFn = e !== null ? document.addEventListener : document.removeEventListener;
      windowFn('pointerup', this.handleWindowPointerUp);
      documentFn('mouseleave', this.handleWindowPointerUp);
      windowFn('pointermove', this.handlePointerMove);

      if (e) {
        this.setupTrackConstraints();
        const controlValue: number =
          this.orientation === Orientation.horizontal
            ? e.pageX - document.documentElement.scrollLeft - this.trackLeft
            : e.pageY - document.documentElement.scrollTop;

        this.value = `${this.calculateNewValue(controlValue)}`;
      }
    }
  };

  private convertToConstrainedValue(value: number): number {
    if (isNaN(value)) {
      value = this._min;
    }

    /**
     * The following logic intends to overcome the issue with math in JavaScript with regards to floating point numbers.
     * This is needed as the `step` may be an integer but could also be a float. To accomplish this the step  is assumed to be a float
     * and is converted to an integer by determining the number of decimal places it represent, multiplying it until it is an
     * integer and then dividing it to get back to the correct number.
     */
    let constrainedValue: number = value - this._min;
    const roundedConstrainedValue: number = Math.round(constrainedValue / this.stepValue);
    const remainderValue: number =
      constrainedValue - (roundedConstrainedValue * (this.stepMultiplier * this.stepValue)) / this.stepMultiplier;

    constrainedValue =
      remainderValue >= Number(this.stepValue) / 2
        ? constrainedValue - remainderValue + Number(this.stepValue)
        : constrainedValue - remainderValue;
    return constrainedValue + this._min;
  }
}
