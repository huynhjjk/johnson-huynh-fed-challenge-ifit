import { Component, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  public isHeroSectionVisible: boolean = false;
  public isEquipmentSectionVisible: boolean = false;
  private observer: IntersectionObserver;

  ngAfterViewInit() {
    // Tracks intersection of hero element on scroll
    const heroSectionElement = document.querySelector('.hero-section-scroll-tracker');
    this.observer = new IntersectionObserver((entry: Array<any>) => {
      this.isHeroSectionVisible = _.get(entry, [0, 'isIntersecting'], false);
    });
    this.observer.observe(heroSectionElement);
    // Tracks intersection of equipment element on scroll
    const equipmentSectionElement = document.querySelector('.equipment-section-scroll-tracker');
    this.observer = new IntersectionObserver((entry: Array<any>) => {
      this.isEquipmentSectionVisible = _.get(entry, [0, 'isIntersecting'], false);
    });
    this.observer.observe(equipmentSectionElement);
  }
}
