import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLoginRequest } from '../../entity/UserLoginRequest';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loading = false

  loginForm: FormGroup
  user: UserLoginRequest = new UserLoginRequest()

  constructor(private router: Router,
    private formBuilder: FormBuilder, private auth: AuthService) {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/home'])
    }
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.loginForm.disable()
    this.loading = true
    this.user.username = this.loginForm.get("username")?.value
    this.user.password = this.loginForm.get("password")?.value
    this.auth.login({ username: this.user.username, password: this.user.password })
      .pipe(finalize(() => {
        this.loading = false
        this.loginForm.enable()
      }))
      .subscribe({
        next: (_) => {
          this.router.navigate(["/home"])
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 401) {
            alert("Error, usuario o contraseña incorrecto")
          }
          else {
            alert("Error con el servidor: ")
          }
        }
      })

  }
}
