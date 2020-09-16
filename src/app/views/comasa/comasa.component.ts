import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comasa',
  templateUrl: './comasa.component.html',
  styleUrls: ['./comasa.component.css']
})
export class ComasaComponent implements OnInit {
  data: Date = new Date();

  imgCollection = [
    {img: 'assets/img/comasa/comasa01.jpg'},
    {img: 'assets/img/comasa/comasa02.jpg'},
    {img: 'assets/img/comasa/comasa03.jpg'},
    {img: 'assets/img/comasa/comasa05.jpg'},
    {img: 'assets/img/comasa/comasa06.jpg'},
    {img: 'assets/img/comasa/comasa07.jpg'},
    {img: 'assets/img/comasa/comasa08.jpg'},
    {img: 'assets/img/comasa/comasa09.jpg'},
    {img: 'assets/img/comasa/comasa10.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
