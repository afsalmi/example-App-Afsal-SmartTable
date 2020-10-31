import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  providers: [Ng5BreadcrumbModule]
})

export class TopBarComponent {
  isAuthenticated = false;
  public userName;
  constructor(
    private router: Router
  ) {
  }


  ngOnInit() {
    console.log("topbar.............");
    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

    if (currentUser) {
      this.userName = currentUser.userName;
    } else {
      this.userName = null;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
