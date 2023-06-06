import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent  {

  @Input() title: string = 'Sin titulo';

    // Doughnut
    @Input('labels') doughnutChartLabels: string[] = [ 'label1', 'label2', 'label3' ];
    @Input('data') doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ],
          backgroundColor: ['#0C97EC', '#27E54C', '#AB27E5']
         },
      ]
    };

}
