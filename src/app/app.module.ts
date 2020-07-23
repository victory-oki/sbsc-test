import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./authentication/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./service/auth/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { NgxWebstorageModule } from "ngx-webstorage";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
