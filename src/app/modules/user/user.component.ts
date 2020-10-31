import { Component, OnInit, ElementRef, Renderer2, OnDestroy, HostListener, ViewContainerRef } from '@angular/core';
import { ConstantService } from '../../structure/constants/constant.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'ng5-breadcrumb';

declare var $: any;
declare var swal: any;
declare var NProgress: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public currentPageName = null;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    public constantService: ConstantService,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
  ) {

   }

   ngOnInit() {
    this.init();
  }

  
  ngOnDestroy() {

  }

  init() {
    this.currentPageName = 'User';
    this.breadcrumbService.addFriendlyNameForRouteRegex('\\/ewallet(\\?.*)?$', this.currentPageName);
    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

    if (!currentUser || currentUser && currentUser.userName !== 'user') {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }

}
