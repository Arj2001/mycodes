import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') signUpForm: NgForm
  defaultQuestion = 'teacher'
  answer = '';
  genders = ['male','female']
  user: any;
  submitted = false

  suggestUserName() {
    
    const suggestedName = 'Superuser';
    
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // })

    this.signUpForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }
  
  onSubmit(form: NgForm){
    this.submitted = true;
    this.user = form.value; 
    form.reset();
  }
}
