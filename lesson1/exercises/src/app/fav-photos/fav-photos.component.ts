import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/185px-Netflix_logo.svg.png';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/160px-Disney%2B_logo.svg.png';

  constructor() { }

  ngOnInit() {
  }

}