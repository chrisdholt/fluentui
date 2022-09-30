import { CheckableFormAssociated } from '@microsoft/fast-foundation';
import { FASTElement } from '@microsoft/fast-element';

class _Checkbox extends FASTElement {}
interface _Checkbox extends CheckableFormAssociated {}

/**
 * A form-associated base class for the {@link @microsoft/fast-foundation#(Checkbox:class)} component.
 *
 * @internal
 */
export class FormAssociatedCheckbox extends CheckableFormAssociated(_Checkbox) {
  proxy = document.createElement('input');
}
