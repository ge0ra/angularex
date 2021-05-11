import { Pipe, PipeTransform } from '@angular/core';
/*
 * Validate the format of a string
 * Usage:
 *   value | customValidation
 * Output:
 *   0: validated
 *   1: not a number
 *   2: value is too short
 *   3: does not include a 9
*/
@Pipe({
  name: 'customValidation'
})
export class CustomValidationPipe implements PipeTransform {
  private errorNumber = 0;

  transform(value: any): number {

    if (isNaN(value)) {
      // Is not a number
      this.errorNumber = 1;
    } else if (value.length < 3) {
      // Is too short
      this.errorNumber = 2;
    } else if (!value.includes(9)) {
      // Does not include a 9
      this.errorNumber = 3;
    } else {
      // Validated
      this.errorNumber = 0;
    }

    return this.errorNumber;
  }
}
