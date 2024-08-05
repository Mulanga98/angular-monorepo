import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-monorepo-cross-border-letter',
  standalone: true,
  templateUrl: './cross-border-letter.component.html',
  styleUrls: ['./cross-border-letter.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class CrossBorderLetterComponent {
  crossBorderForm;

  vehicleLicensePlateNumberControl!: FormControl;
  selectCountriesControl!: FormControl;

  constructor(private fb: FormBuilder) {
    this.crossBorderForm = this.fb.group({
      vehicleLicensePlateNumberControl: [
        '',
        [Validators.required, Validators.minLength(7), Validators.maxLength(9)],
      ],
      selectCountriesControl: ['', [Validators.required]],
    });
    this.vehicleLicensePlateNumberControl =
      this.crossBorderForm.controls.vehicleLicensePlateNumberControl;
    this.selectCountriesControl =
      this.crossBorderForm.controls.selectCountriesControl;
  }

  get vehicleLicensePlateNumberError(): string | null {
    const control = this.vehicleLicensePlateNumberControl;

    if (control.hasError('required')) {
      return 'plate number is required.';
    }
    if (control.hasError('minlength')) {
      return 'License Plate Number must be at least 7 characters long.';
    }
    if (control.hasError('maxlength')) {
      return 'License Plate Number cannot be more than 9 characters long.';
    }

    return null;
  }
  get selectCountriesError(): string | null {
    const control = this.selectCountriesControl;
    if (control.hasError('required')) {
      return 'Select at least one country.';
    }
    return null;
  }
  get formError(): string | null {
    return this.vehicleLicensePlateNumberError || this.selectCountriesError;
  }
  onNext() {
    const value = this.crossBorderForm.value;
    console.log(value);
    console.log(this.vehicleLicensePlateNumberControl);
  }
}
