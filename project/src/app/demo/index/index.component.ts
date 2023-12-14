// angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export default class IndexComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.products = await this.dataService.getProducts();
  }
  
}