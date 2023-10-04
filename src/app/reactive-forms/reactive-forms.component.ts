import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

userForm:FormGroup;


  constructor (private formBuilder: FormBuilder){
      this.userForm = this.formBuilder.group({
        email: ['', 
        [Validators.required, 
          Validators.email
        ]],

        password: this.formBuilder.control('')
      })
    }

    get emailControl(){
      return this.userForm.controls['email'];
    }

    get emailControlIsInvalid(){
      return this.emailControl.invalid && this.emailControl.touched;
    }

      onSubmit(): void{
        console.log(this.userForm.value)
      }

}
