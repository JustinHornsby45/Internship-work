import { Component, OnInit } from '@angular/core';

export interface Details {
  height?: any;
  weight?: any;
  bmi?: any;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userDetails: Details = {
    height: '',
    weight: '',
    bmi: ''
  };

  // public height = 1.85
  // public weight = 75.00
  // public bmi = 0.00

  /*
  calculateBmi(){
    this.userBmi.bmi = this.userBmi.weight/(this.userBmi.height**2)
    alert("calculated" + this.userBmi.weight)
    console.log(this.userBmi)
  }*/
  constructor() { }

  ngOnInit(): void {
  }

}
