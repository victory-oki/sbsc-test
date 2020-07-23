import { Component, OnInit } from "@angular/core";
import { DashboardService } from "src/app/service/dashboard/dashboard.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  date = Date.now();
  dashboardData: any;
  constructor(private dashboardService: DashboardService) {
    this.getDashboarDetails();
  }

  ngOnInit(): void {}

  getDashboarDetails() {
    this.dashboardService.getDashboardDetails().subscribe(
      (data) => {
        console.log(data);
        this.dashboardData = { ...data[0] };
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
