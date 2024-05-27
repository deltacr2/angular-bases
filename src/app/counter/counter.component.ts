import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1> counter =  {{ counter }} </h1>
        <button (click)="increaseBy(2)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="decreaseBy(3)">-1</button>
    `
})

export class CounterComponent  {
    public title: string = 'Mi primera app de Angular';
    public counter: number = 10;
  
  increaseBy (value:number):void{
    this.counter += value;
  }
  
  decreaseBy (value:number):void{
    this.counter -= value;
  }
  
  resetCounter ():void{
    this.counter = 10;
  }

}