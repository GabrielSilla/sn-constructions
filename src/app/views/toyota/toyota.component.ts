import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrls: ['./toyota.component.css']
})
export class ToyotaComponent implements OnInit {
  data: Date = new Date();

  imgCollection = [
    {img: 'assets/img/toyota/toyota01.jpg'},
    {img: 'assets/img/toyota/toyota02.jpg'},
    {img: 'assets/img/toyota/toyota04.jpg'},
    {img: 'assets/img/toyota/toyota05.jpg'},
    {img: 'assets/img/toyota/toyota06.jpg'},
    {img: 'assets/img/toyota/toyota07.jpg'}
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
