import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'column'
  },
  title: {
      text: 'Basic drilldown'
  },
  xAxis: {
      type: 'category'
  },

  legend: {
      enabled: false
  },

  plotOptions: {
      series: {
          dataLabels: {
              enabled: true
          }
      }
  },

  series: [{
      name: 'Things',
      data: [{
          name: 'Animals',
          y: 5,
          drilldown: 'animals'
      }, {
          name: 'Fruits',
          y: 2,
          drilldown: 'fruits'
      }, {
          name: 'Cars',
          y: 4,
          drilldown: 'cars'
      }]
  }],
  drilldown: {
      series: [{
          id: 'animals',
          data: [
              ['Cats', 4],
              ['Dogs', 2],
              ['Cows', 1],
              ['Sheep', 2],
              ['Pigs', 1]
          ]
      }, {
          id: 'fruits',
          data: [
              ['Apples', 4],
              ['Oranges', 2]
          ]
      }, {
          id: 'cars',
          data: [
              ['Toyota', 4],
              ['Opel', 2],
              ['Volkswagen', 2]
          ]
      }]
  }
  });

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }


  constructor() { }

  ngOnInit() {
  }

}
