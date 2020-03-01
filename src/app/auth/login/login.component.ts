import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    public constructor() { }

    public ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', { validators: [Validators.required, Validators.email] }),
            password: new FormControl('', { validators: [Validators.required] }),
        });
    }

    public onSubmit(): void {
        console.log(this.loginForm);
    }
}
