import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

userForm:FormGroup;


  constructor (private formBuilder: FormBuilder){
      this.userForm = this.formBuilder.group({
        email: this.formBuilder.control(' '),
        password: this.formBuilder.control(' ')
      })
    }

      onSubmit(): void{
        console.log(this.userForm.value)
      }

}
