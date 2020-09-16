import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regional-telhas',
  templateUrl: './regional-telhas.component.html',
  styleUrls: ['./regional-telhas.component.css']
})
export class RegionalTelhasComponent implements OnInit {
  data: Date = new Date();

  imgCollection = [
    {img: 'assets/img/regional-telhas/regional01.jpg'},
    {img: 'assets/img/regional-telhas/regional02.jpg'},
    {img: 'assets/img/regional-telhas/regional03.jpg'},
    {img: 'assets/img/regional-telhas/regional04.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getLinkWhastapp(number, message) {
    var url = 'https://api.whatsapp.com/send?phone=' 
       + number 
       + '&text=' 
       + encodeURIComponent(message)

    return url;
  }
}
