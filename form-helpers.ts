import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export function markAsTouchedAllFormInputs(form: FormGroup) {
  for (const inputName in form.controls) {
    const control = form.get(inputName) as FormGroup;

    form.get(inputName).markAsTouched();

    if (control.controls != null) {
      markAsTouchedAllFormInputs(control);
    }
  }
}
