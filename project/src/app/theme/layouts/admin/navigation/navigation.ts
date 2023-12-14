import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
   // title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'About',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'elements',
    title: 'les produits',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ranim',
        title: 'shop',
        type: 'item',
        classes: 'nav-item',
        url: '/index',
        icon: 'ti ti-typography'
      },
    ]
  },
  {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/login',
        icon: 'ti ti-login',
        target: true,
        breadcrumbs: false
      },
      /*{
        id: 'register',
        title: 'Register',
        type: 'item',
        classes: 'nav-item',
        url: '/register',
        icon: 'ti ti-user-plus',
        target: true,
        breadcrumbs: false
      },*/
     
    ]
  }
  
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
