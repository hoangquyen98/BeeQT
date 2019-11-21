import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
    { path: '/users-management', title: 'Users Management',  icon: 'content_paste', class: '' },
    { path: '/products-management', title: 'Products Management',  icon: 'content_paste', class: '' },
    { path: '/posts-management', title: 'Posts Management',  icon: 'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  formSidebar: FormGroup;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
