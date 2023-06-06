import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [],
})
export class IncrementComponent implements OnInit {
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  @Input('value') progress: number = 30;
  @Input() btnClass = 'btn-primary';

  @Output('value') outValue: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progress > 95) {
      this.outValue.emit(100);
      this.progress = 95;
    }

    if (this.progress < 5) {
      this.outValue.emit(0);
      this.progress = 5;
    }

    this.progress = this.progress + value;
    this.outValue.emit(this.progress);
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      newValue = 100;
    } else if (newValue <= 0) {
      newValue = 0;
    }

    this.outValue.emit(newValue);
  }
}
