import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from "@angular/core";
import * as ProgressBar from "progressbar.js";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() mainColor = "1B5BAC";
  @Input() subColor = "E2EDF8";
  @Input() percentage: number = 0.6;
  @Input() chartName = "CAPEX";
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}

  ngAfterViewInit() {
    this.initializeChart();
  }

  initializeChart() {
    var chart = document.getElementById(this.chartName);
    var self = this;
    var bar = new ProgressBar.Circle(chart, {
      color: "#000000",
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 1,
      textAlign: "center",
      trailWidth: 7,
      //SUB COLOR
      trailColor: `#${this.subColor}`,
      easing: "easeInOut",
      duration: 1400,

      text: {
        className: "progressbar__label",
        autoStyleContainer: false,
      },
      //MAIN COLOR
      from: { color: `#${this.mainColor}`, width: 7 },
      to: { color: `#${this.mainColor}`, width: 7 },
      // Set default step function for all animate calls
      step: function (state, circle) {
        circle.path.setAttribute("stroke", state.color);
        circle.path.setAttribute("stroke-width", state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText("");
        } else {
          circle.setText(self.chartName);
        }
      },
    });

    bar.text.style.fontFamily = '"Nunito Sans", Helvetica, sans-serif';
    bar.text.style.fontSize = "2rem";
    bar.path.style.strokeLinecap = "round";
    bar.animate(this.percentage); // Number from 0.0 to 1.0
  }
}
