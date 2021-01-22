import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { FormControlName } from '@angular/forms'

@Component({
  selector: 'mi-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;
  @Input() errorMessage: string;
  @ContentChild(FormControlName) control: FormControlName;
  private input: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.control;
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
