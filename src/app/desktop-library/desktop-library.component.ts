import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-desktop-library',
  templateUrl: './desktop-library.component.html',
  styleUrls: ['./desktop-library.component.scss']
})
export class DesktopLibraryComponent implements OnInit {
  public activeIndex: number;
  public desktopLibraryItems: Array<IDesktopLibraryItem> = [
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (24).png',
      thumbnailUrl: 'assets/images/avatars/puspure-sanita-avatar.png',
      title: 'Lake Inniscarra, Ireland—Pyramid',
      stats: {
        metricTime: '30:53',
        metricDistance: '6,248 M',
      },
      url: '#/lake-inniscarra-ireland-pyramid'
    },
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (18).png',
      thumbnailUrl: 'assets/images/avatars/francia-susan-avatar.png',
      title: 'Performance Series',
      workoutsSeries: 9,
      url: '#/performance-series'
    },
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (25).png',
      thumbnailUrl: 'assets/images/avatars/alex-silver-fagan-avatar.png',
      title: 'Slow Pulls and Fast Intervals',
      stats: {
        metricTime: '44:13',
        metricDistance: '9,948 M',
      },
      url: '#/slow-pulls-and-fast-intervals'
    },
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (19).png',
      thumbnailUrl: 'assets/images/avatars/gregory-alex-avatar.png',
      title: '20 Minutes to Toned',
      workoutsSeries: 12,
      url: '#/20-minutes-to-toned'
    },
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (32).png',
      thumbnailUrl: 'assets/images/avatars/whipple-mary-avatar.png',
      title: 'Charles Race, Boston, Massachusetts',
      stats: {
        metricTime: '36:22',
        metricDistance: '8,648 M',
      },
      url: '#/charles-race-boston-massachusetts'
    },
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (20).png',
      thumbnailUrl: 'assets/images/avatars/eden-hannah-avatar.png',
      title: 'Full-Body HIIT Series',
      workoutsSeries: 12,
      url: '#/full-body-hiit-series'
    },
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (35).png',
      thumbnailUrl: 'assets/images/avatars/nanchengwa-desmond-avatar.png',
      title: 'Kafue River, Zambia—Power Stroke Pyramid',
      stats: {
        metricTime: '22:22',
        metricDistance: '4,660 M',
        metricCalorieBurn: '520 CALS'
      },
      url: '#/charles-race-boston-massachusetts'
    },
    {
      imageUrl: 'assets/images/img-marketing-web-card/img_marketing_web_cardimg_marketing_web_card@2x (21).png',
      thumbnailUrl: 'assets/images/avatars/gideon-akande-avatar.png',
      title: 'Shred & Burn Series',
      workoutsSeries: 16,
      url: '#/shred-and-burn-series'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  isSelected(index: number): boolean {
    return _.isEqual(index, this.activeIndex);
  }
}

export interface IDesktopLibraryItem {
  imageUrl: string,
  thumbnailUrl: string,
  title: string,
  stats?: {
    metricTime?: string,
    metricDistance?: string,
    metricCalorieBurn?: string
  },
  workoutsSeries?: number,
  url: string
}
