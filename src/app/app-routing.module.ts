import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { DashboardGuard } from "./guards/dashboard/dashboard.guard";

const routes: Routes = [
  {
    path: "login",
    pathMatch: "full",
    component: LoginComponent,
  },
  {
    path: "",
    loadChildren: () =>
      import("./main-layout/main-layout.module").then(
        (m) => m.MainLayoutModule
      ),
    canLoad: [DashboardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
