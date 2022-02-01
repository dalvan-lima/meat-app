import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iRestaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from '../restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: iRestaurant

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(rest => this.restaurant = rest )
  }

}
