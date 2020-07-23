import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth/auth.service";
import { Router } from "@angular/router";
import { CurrentUserService } from "src/app/service/current-user/current-user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMsg = false;
  errorMsg: "";
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private currentUserService: CurrentUserService
  ) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }

  submit(val) {
    console.log(val);
    this.errMsg = false;
    this.errorMsg = "";
    this.isLoading = true;
    this.authService.login(val).subscribe(
      (data) => {
        console.log(data);
        this.isLoading = false;
        if (data.verification_status) {
          this.currentUserService.addUser(data);
          this.router.navigateByUrl("/dashboard");
        } else {
          this.errMsg = true;
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
        this.errorMsg = error.error;
      }
    );
  }
  ngOnInit(): void {}
}
