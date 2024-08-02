import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private formBuilder: FormBuilder) { }

  registerFormGroup: FormGroup = this.formBuilder.group({
    firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastname: new FormControl('', [customValidator]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    passwords: new FormControl({
      password: new FormControl('', []),
      repass: new FormControl('', [])
    })    
  })

  ngOnInit(): void {
    this.registerFormGroup.valueChanges.subscribe((change) => console.log(change))
  }

  handleRegister() {
    console.log(this.registerFormGroup.value)
  }


}

const customValidator: ValidatorFn = (control: AbstractControl) => {
  const value = control.value;
  // if (value!== 'TEST') {
  //   return { wrongValue: true }
  // }
  if(value.length < 3) {
    return {minlength: true}
  }
  console.log(control.errors);
  return null
}