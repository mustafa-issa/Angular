import { DomService } from './dom.service';

import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Chart } from '../chart/chart';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @ViewChild('one') d1:ElementRef;
  @ViewChild("one", { read: ViewContainerRef }) container: ViewContainerRef;
  keys: string[];
  chartTypes = ChartTypes
  selectedKey: string = "pie";
  htmlToAdd: string;
  constructor(private domService: DomService) {
    this.keys = Object.keys(this.chartTypes).filter(Number);
    
  }
  
  ngOnInit() {

  }
  test(): void {
    //this.domService.appendComponentToElement(ChartComponent, this.d1);
    this.domService.createComponent(this.selectedKey, this.container, ChartComponent);
  }

  setNewUser(id: any): void {
    this.selectedKey = this.chartTypes[id];
}

}

export enum ChartTypes {
  pie = 1,
  bar = 2
}