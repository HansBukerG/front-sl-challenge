import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent {

  constructor(
    private router:Router
  ){}

  goToHome(){
    this.router.navigate(['companies'])
  }
}
