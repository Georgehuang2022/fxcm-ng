import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Home';
  currentRoute: string = 'home';
  showFiller = false;
  constructor(
    private router: Router,
  ) {
    if (this.router.url.includes('home')) {
      this.title = 'Back'
      this.currentRoute = '';
    }

    this.router.events.subscribe(e => { 
      if (e instanceof NavigationStart) { 
        if (e.url.includes('home')) { 
          this.title = 'Back'
          this.currentRoute = '';
        
        } else {
          this.title = 'Home'
          this.currentRoute = 'home';
        }
      }
    })
  }


  ngOnInit(): void {
      
  }
}
