import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


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

    constructor(private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() { 
        this.createForm();
        this.setChangeValidate();
        this.accessEmailList = ['aishwaryateegulla4@tamu.com', 'cindy@tamu.edu']
    }

    createForm() {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.formGroup = this.formBuilder.group({
          'email': [null, [Validators.required, Validators.pattern(emailregex)]],
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
            this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
      }
    
      getErrorPassword() {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
          this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
      }
    
      onSubmit(post) {
        this.post = post;
      }
    

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        console.log("this", this.formGroup.value['email'])
        let email = this.formGroup.value['email'];
        if(email == 'aishwaryateegulla4@tamu.edu' || email =='cindy@tamu.edu'){
            this.router.navigate(['/dashboard']);
        }else{
            this.router.navigate(['/login']);
        }
    }
}
