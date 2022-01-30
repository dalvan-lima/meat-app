import { Component, OnInit, Input } from '@angular/core';
import { iRestaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: iRestaurant;

  constructor() { }

  ngOnInit() {
  }

}