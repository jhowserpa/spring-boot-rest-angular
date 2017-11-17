import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  empresa = 'Crud Angular Front-End integrado com Sprind Boot atraves do serviço REST.';

  constructor() { }

  ngOnInit() {
  }

}
