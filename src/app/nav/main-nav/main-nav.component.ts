import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  public mainNavItems: Array<IMainNavItem> = [
    {
      title: 'exercise',
      url: '#/excercise'
    },
    {
      title: 'nutrition',
      url: '#/nutrition'
    },
    {
      title: 'activity',
      url: '#/activity'
    },
    {
      title: 'sleep',
      url: '#/sleep'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

export interface IMainNavItem {
  title: string,
  url: string
}
