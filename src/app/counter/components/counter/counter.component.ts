import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `

<h3>Counter: {{counter}}</h3>

<button (click)="increaseCounterBy(1)" >+1</button>
<button (click)="increaseCounterBy(-1)" >-1</button>
<button (click)="resetCounter()" >RESET</button>

  `
})
export class CounterComponent {
  public counter: number = 0;

  increaseCounterBy(value: number):void{
    this.counter+=value;
  }

  resetCounter(){
    this.counter=0;
  }
}
