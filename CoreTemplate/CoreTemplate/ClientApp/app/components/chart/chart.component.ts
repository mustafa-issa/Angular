import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    @Input() pageTitle: string = 'chart';
    chartCredits ={
        enabled: true,
        href: "http://www.chartsmix.com",
        text: "Chartsmix"
    };
    chartName: string = "chart4";
    chart4 : any;
    constructor() { }
    data = [];
    type = "";
    ngOnInit() {
        this.chart4 = new Chart({
            chart: {
                type: this.type,
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
                type: this.type,
                name: 'Meters Group',
                data: this.data
            }]
        });
    }
}
