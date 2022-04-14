import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { GuestService } from 'src/app/services/guest.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images!: Image[];
  length: any;


  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(private guestService: GuestService) {
  }

  ngOnInit(): void {
    this.getImages();   
  }

  public getImages() {    
    this.guestService.getImages().then(images => this.images = images);
  }

  

}
