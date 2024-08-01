import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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

  constructor(private fb: FormBuilder) {
    this.crossBorderForm = this.fb.group({
      vehicleLicensePlateNumber: [
        '',
        [Validators.required, Validators.minLength(7), Validators.maxLength(9)],
      ],
    });
    this.vehicleLicensePlateNumberControl =
      this.crossBorderForm.controls.vehicleLicensePlateNumber;
  }
  onNext() {
    const value = this.crossBorderForm.value;
    console.log(value);
    console.log(this.vehicleLicensePlateNumberControl);
  }
}
