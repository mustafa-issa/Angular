import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    chartCredits ={
        enabled: true,
        href: "http://www.chartsmix.com",
        text: "Chartsmix"
    };
    chartName: string = "chart4";

    constructor() { }

    ngOnInit() {
    }

    chart4 = new Chart({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            height: '70%'
        },

        title: {
            text: 'Meter Groups'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        credits: this.chartCredits,
        series: [{
            type: 'pie',
            name: 'Meters Group',
            data: [
                ['Group 1', 45.0],
                ['Group 2', 26.8],
                ['Group 3', 12.8],
                ['Group 4', 8.5],
                ['Group 5', 6.2],
                ['Group 6', 0.7]
            ]
        }]
    });

}
