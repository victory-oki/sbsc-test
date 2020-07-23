import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { ChartComponent } from "./chart/chart.component";

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ChartComponent],
})
export class SharedModule {}
