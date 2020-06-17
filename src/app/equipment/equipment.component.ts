import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  @Input() isEquipmentSectionVisible: boolean;

  public activeIndex: number;
  public equipmentItems: Array<IEquipmentItem> = [
    {
      imageUrl: 'assets/images/equipment/threadmills.png',
      category: 'Threadmills',
      url: '#/threadmills'
    },
    {
      imageUrl: 'assets/images/equipment/bikes.png',
      category: 'Bikes',
      url: '#/bikes'
    },
    {
      imageUrl: 'assets/images/equipment/ellipticals.png',
      category: 'Ellipticals',
      url: '#/ellipticals'
    },
    {
      imageUrl: 'assets/images/equipment/strength.png',
      category: 'Strength',
      url: '#/strength'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  isSelected(index: number): boolean {
    return _.isEqual(index, this.activeIndex);
  }
}

export interface IEquipmentItem {
  imageUrl: string,
  category: string,
  url: string
}
