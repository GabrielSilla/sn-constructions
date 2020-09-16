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
    {img: 'assets/img/toyota/toyota01.jpg', msg: 'A SN Construções já atua no mercado desde 2014, desde então, a Toyota foi uma de nossas maiores participações.', href: '/toyota'},
    {img: 'assets/img/comasa/comasa01.jpg', msg: 'No ano de 2016 a SN Construções participou da obra e edificação do prédio da Volkswagem Comasa.', href: '/comasa'},
    {img: 'assets/img/regional-telhas/regional01.jpg', msg: 'Ainda em 2016 a SN Construções participou de uma obra desafiadora no subsolo da Regional Telhas.', href: '/regional-telhas'}
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
