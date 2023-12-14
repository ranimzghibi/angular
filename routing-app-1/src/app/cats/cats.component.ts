import { Component } from '@angular/core';
import {CATS} from "../mocks-cats";
import {Cat} from '../cat';
import * as _ from 'lodash';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cats = CATS;

  constructor() {}

  getCatById(id: number) {
    let index = _.findIndex(this.cats, (c: Cat) => {
      return c.id === id;
    });
    console.log(this.cats[index]);
  }
}



