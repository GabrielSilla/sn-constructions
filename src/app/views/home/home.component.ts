import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;

  imgCollection = [
    {img: 'assets/img/toyota/toyota01.jpg', msg: 'For a start, it does not automatically follow that a record amount of ice will melt this summer'},
    {img: 'assets/img/toyota/toyota02.jpg', msg: 'For a start, it does not automatically follow that a record amount of ice will melt this summer'},
    {img: 'assets/img/toyota/toyota04.jpg', msg: 'For a start, it does not automatically follow that a record amount of ice will melt this summer'},
    {img: 'assets/img/toyota/toyota05.jpg', msg: 'For a start, it does not automatically follow that a record amount of ice will melt this summer'},
    {img: 'assets/img/toyota/toyota06.jpg', msg: 'For a start, it does not automatically follow that a record amount of ice will melt this summer'},
    {img: 'assets/img/toyota/toyota07.jpg', msg: 'For a start, it does not automatically follow that a record amount of ice will melt this summer'}
  ];

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  getLinkWhastapp(number, message) {
    var url = 'https://api.whatsapp.com/send?phone=' 
       + number 
       + '&text=' 
       + encodeURIComponent(message)

    return url;
  }
}
