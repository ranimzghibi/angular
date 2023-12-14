import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOGS } from "../mocks-dogs";
import { Dog } from '../dog';
import * as _ from 'lodash';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
})
export class DogDetailsComponent implements OnInit {
  dog!: Dog;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    this.getDogById(idFromRoute);
  }
  getDogById(id: number) {
    let index = _.findIndex(DOGS, (c: Dog) => {
      return c.id === id;
    });
    this.dog = DOGS[index];
    console.log(this.dog);
  }
}

 