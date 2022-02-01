import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioOption } from './radio.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]
  
  value: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value)
  }

  // As diretivas vão chamar esse método quando quiserem passar um valor ao componente
  writeValue(obj: any) {
    this.value = obj;
  }

  // Passa uma função que deve ser chamada sempre que o valor interno é chamado
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Passa uma função quando o usuário entra no componente
  registerOnTouched(fn: any): void {
      
  }

  // 
  setDisabledState(isDisabled: boolean): void {
      
  }
}
