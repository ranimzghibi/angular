import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATS } from "../mocks-cats";
import { Cat } from '../cat';
import * as _ from 'lodash';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
})
export class CatDetailsComponent implements OnInit {
  cat!: Cat;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    this.getCatById(idFromRoute);
  }
  getCatById(id: number) {
    let index = _.findIndex(CATS, (c: Cat) => {
      return c.id === id;
    });
    this.cat = CATS[index];
    console.log(this.cat);
  }
}

 