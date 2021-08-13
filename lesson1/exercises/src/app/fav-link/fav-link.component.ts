import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-link',
  templateUrl: './fav-link.component.html',
  styleUrls: ['./fav-link.component.css']
})
export class FavLinkComponent implements OnInit {
favLink=[ 'https://www.netflix.com/browse','https://www.disneyplus.com/'];
  constructor() { }

  ngOnInit() {
  }

}
