import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count:number=0
  constructor() {
    
   }
   incrementCount(){
     this.count = this.count+1
   }
   decrementCount(){
    this.count = this.count-1
  }
  resetCount(){
    this.count = 0
  }
  ngOnInit() {
  }
}
