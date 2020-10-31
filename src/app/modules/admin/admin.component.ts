import { Component, OnInit } from '@angular/core';
import { ConstantService } from '../../structure/constants/constant.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'ng5-breadcrumb';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import  { ImageThumbnailColumn } from "./image-thumbnail.column";
const url = 'https://reqres.in/api/users'
declare var $: any;
declare var jQuery: any;
declare var autosize: any;
declare var Ladda: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  public currentPageName = null;
  public reportList = [];
  public settings;
  public source: ServerDataSource;


  constructor(
    public constantService: ConstantService,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private http: HttpClient
  ) {
    this.source = new ServerDataSource(http, {
      dataKey: 'data',
      endPoint: url,
      pagerPageKey: 'page',
      pagerLimitKey: 'per_page',
      totalKey: 'total'
    })

  }

  ngOnInit() {
    this.init();
  }


  ngOnDestroy() {

  }

  init() {
    this.currentPageName = 'Admin Report';
    this.breadcrumbService.addFriendlyNameForRouteRegex('\\/admin(\\?.*)?$', this.currentPageName);

    const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

    if (!currentUser || currentUser && currentUser.userName !== 'admin') {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    } else {
      this.settings = {
        columns: {
          id: {
            title: 'ID'
          },
          email: {
            title: 'Email'
          },
          first_name: {
            title: 'First Name'
          },
          last_name: {
            title: 'Last Name'
          },
          avatar: {
            title: 'Photo',
            type: 'custom',
            renderComponent: ImageThumbnailColumn
          }
        }
      };
    }
  }

}
