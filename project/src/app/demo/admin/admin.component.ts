import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { Product } from 'src/models/product';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { CommendeService } from 'src/app/commende.service';
import { Commande } from 'src/models/commende';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export default class AdminComponent implements OnInit{
  showForm = false;
  commendes: Commande[] = [];
  ProductForm!: FormGroup;
  editingId: number | null = null;
  products: Product[] = [];
  
  constructor(private adminService: AdminService, private fb: FormBuilder, private commendeService: CommendeService) { 
    this.commendeService = commendeService;
    this.ProductForm = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.loadCommende();
    this.loadProducts();
    this.ProductForm = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
  loadProducts(): void {
    this.adminService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }
  deleteProduct(id: number): void {
    this.adminService.deleteProduct(id).subscribe(() => this.refreshProduct());
  }
  private refreshProduct(): void {
    this.adminService.getProducts().subscribe(response => this.products = response);
  }
  editProduit(product: Product): void {
    this.showForm = true; // Ajoutez cette ligne pour afficher le formulaire
 
    this.editingId = product.id;
    this.ProductForm.setValue({
      name: product.name,
      id: product.id,
      image: product.image,
      description:product.description,
      price:product.price
    });}
    cancelEdit(): void {
      this.editingId = null;
      this.ProductForm.reset();
    }
    updateProduct(): void {
      
      const updatedProduct = this.ProductForm.value as Product;
      if (this.editingId !== null) {
        updatedProduct.id = this.editingId;
      }
      this.adminService.updateProduct(updatedProduct).subscribe(() => {
        this.refreshProduct();
        this.cancelEdit();
      });
    }
    addProduct(): void {
      const newProd = this.ProductForm.value as Product;
      this.adminService.addProducts(newProd).subscribe(() => {
        this.refreshProduct();
        this.ProductForm.reset();
      });
    }
    loadCommende(): void {
      this.commendeService.getCommende().subscribe(
        (commandes) => {
          console.log(commandes);
          this.commendes= commandes;
        },
      );
    }
    private refreshCommende(): void {
      this.commendeService.getCommende().subscribe(response => this.commendes = response);
    }
    deleteCommende(id: number): void {
      this.commendeService. deleteCommende(id).subscribe(() => this.refreshCommende());
    }
}
