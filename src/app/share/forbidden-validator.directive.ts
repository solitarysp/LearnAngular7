import {Directive, Input} from '@angular/core';
import {AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';


@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  console.log('valiadte sync');
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

// check tất cả value nếu có 1 value null thì trả về null tức là lỗi
export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  // console.log('all')
  for (const value in control.value) {
    if (!control.value[value]) {
      return {'identityRevealed': true};
    }
  }
  return null;
};
