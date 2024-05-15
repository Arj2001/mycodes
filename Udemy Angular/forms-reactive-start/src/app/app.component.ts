import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenNames = ['silent.cat', 'tuttu']

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signUpForm.setValue({
      userData: {
        username: "hello",
        email: "eamil@gmai.com"
      },
      gender: 'female',
      hobbies: []
    });
    this.onAddHobby()
    this.onAddHobby()
    this.signUpForm.patchValue({
      gender: 'male',
      hobbies: ['fishing', 'reading']
    });
    // this.signUpForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )

    this.signUpForm.statusChanges.subscribe(
      (value) => console.log(value)
    )
  }

  onSubmit() {
    console.log(this.signUpForm);

  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  gethobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls
  }

  checkForbiddenNames(control: FormControl): { [s: string]: boolean } {

    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { 'isForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({ 'isEmailForbidden': true })
          } else {
            resolve(null)
          }
        }, 1000)
      }
    );
    return promise;
  }
}
