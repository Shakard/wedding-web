import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  numbers = new Array<number>();
  constructor() {}

  ngOnInit(): void {
    this.numbers = Array(5).fill(19);
  }

}
