import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-graphica1',
  templateUrl: './graphica1.component.html',
  styles: [
  ]
})
export class Graphica1Component  {

  labels1 : string[] =  [ 'Dato2', 'Dato3', 'Dato4' ];
  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 30, 45, 100 ],
        backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ],
        //hoverBackgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
      }
    ]
  };

}
