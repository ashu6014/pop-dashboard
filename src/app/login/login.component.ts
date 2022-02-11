import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formGroup: FormGroup;
    titleAlert: string = 'This field is required';
    post: any = '';
    accessEmailList: any[];
    hide = true;

    constructor(private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.createForm();
        this.setChangeValidate();
    }

    createForm() {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.formGroup = this.formBuilder.group({
          'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkUserAccess],
          'name': [null, Validators.required],
          'password': [null, [Validators.required]],
          'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          'validate': ''
        });
      }

      setChangeValidate() {
        this.formGroup.get('validate').valueChanges.subscribe(
          (validate) => {
            if (validate == '1') {
              this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = "You need to specify at least 3 characters";
            } 
          }
        )
      }

     getErrorEmail() {
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
          this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
            this.formGroup.get('email').hasError('alreadyInUse') ? 'You do not have access to this dashboard' : '';
      }
    
      getErrorPassword() {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
          this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
      }
    
      onSubmit(post) {
        this.post = post;
      }

      checkUserAccess(control) {
        // mimic http database access
        let db = ['aishwaryateegulla4@tamu.edu', 'cguerrero@tamu.edu',
      'a-lara@tamu.edu', 'kara.sutton@tamu.edu', 'fuhuitong@tamu.edu', 'beverly.irby@tamu.edu', 
      'shifangtang03@tamu.edu'];
        return new Observable(observer => {
          setTimeout(() => {
            console.log("control",control)
            let result = (db.indexOf(control.value) !== -1) ? null : { 'alreadyInUse': true };
            observer.next(result);
            observer.complete();
          }, 1200)
        })
        
      }
      onLogin() {
        if(this.formGroup.get('email').status == 'VALID'){
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['/dashboard']);
        }
        else{
            this.router.navigate(['/login']);
        }
    }
}
