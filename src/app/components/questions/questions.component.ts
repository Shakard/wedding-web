import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  mapDisplayed = false;
  displayResponsive: boolean = false;   
  map1: boolean = false;   
  map2: boolean = false;   

  constructor() { }

  ngOnInit(): void {
  }

  showResponsiveDialog() {
    this.displayResponsive = true;
}

}
