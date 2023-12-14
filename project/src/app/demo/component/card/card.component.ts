import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CommendeService } from 'src/app/commende.service';  
import { Commande } from 'src/models/commende';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export default class CardComponent implements OnInit{
  

  CommendeForm!: FormGroup;
  productId: number;
  commandes: Commande[] = [];


  constructor(private commandeService: CommendeService , private fb: FormBuilder,private route: ActivatedRoute, private router: Router) {
  
    this.CommendeForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      quantite: ['', Validators.required],

    });
  }
  ngOnInit(): void {
   
    this.CommendeForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      quantite: ['', Validators.required],
    });
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'];
    });
  }

 

  private refreshCommende(): void {
    this.commandeService.getCommende().subscribe(response => this.commandes = response);
  }

  addCommende(): void {
    const newcmd = {...this.CommendeForm.value , id: this.productId} as Commande;
    this.commandeService.addCommende(newcmd).subscribe(() => {
      this.refreshCommende();
      this.CommendeForm.reset();
      this.router.navigate(['/confirmation']);
    });
  }
}
