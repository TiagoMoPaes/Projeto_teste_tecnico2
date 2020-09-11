import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links = ['cadastro', 'lista'];
  activeLink = this.links[0];
  background = 'primary';
  
  constructor() { }

  ngOnInit(): void {
  }

}
