import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mi-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      value: this.formBuilder.control('', Validators.required),
      identCode: this.formBuilder.control('', Validators.required),
      unitType: this.formBuilder.control('', Validators.required),
      brand: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('', Validators.required),
    });
  }
}
