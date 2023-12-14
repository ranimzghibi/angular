import { Component } from '@angular/core';
import {DOGS} from "../mocks-dogs";
import {Dog} from '../dog';
import * as _ from 'lodash';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs = DOGS;

  constructor() {}

  getDogById(id: number) {
    let index = _.findIndex(this.dogs, (c: Dog) => {
      return c.id === id;
    });
    console.log(this.dogs[index]);
  }
}



