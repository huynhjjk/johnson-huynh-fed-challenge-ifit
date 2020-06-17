import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-media-slider',
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.scss']
})
export class MediaSliderComponent implements OnInit {
  public mediaSliderItems: Array<IMediaSliderItem> = [
    {
      imageUrl: 'assets/svg-logos/gear-junkie-logo.svg',
      company: 'Gear Junkie',
      quote: 'You focus on putting in the work, and the technology handles the rest.'
    },
    {
      imageUrl: 'assets/svg-logos/wired-logo.svg',
      company: 'Wired',
      quote: 'Literally transports you from home to wherever you choose to run.'
    },
    {
      imageUrl: 'assets/svg-logos/mashable-logo.svg',
      company: 'Mashable',
      quote: 'Breathes new life into a tired, old running routine.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  slideLeft(): void {
    const removedItem = this.mediaSliderItems.shift();
    this.mediaSliderItems.push(removedItem);
  }

  slideRight(): void {
    const removedItem = this.mediaSliderItems.pop();
    this.mediaSliderItems.unshift(removedItem);
  }
}

export interface IMediaSliderItem {
  imageUrl: string,
  company: string,
  quote: string
}
