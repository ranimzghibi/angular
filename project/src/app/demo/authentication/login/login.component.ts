// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/models/admin';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  users: User[] = [];
  e: string = "";

  constructor(private adminService: AdminService, private router: Router) {}

  async authentification(email: string, password: string): Promise<void> {
    let user;

    this.users = await this.adminService.getUsers().toPromise();

    for(let i=0; i<this.users.length; i++){
      if(this.users[i].username === email && this.users[i].password === password){
        user = this.users[i];
        console.log(user);
      }
    }

    if (user) {
      if (user.role === "admin"){
        this.router.navigate(['/admin']);
        console.log('success');
      } else if(user.role === "customer") {
        this.router.navigate(['/index']);
        console.log('user');
      }
    } else {
      console.log(user);
      this.e = 'Invalid credentials';
      console.log('rien');
    }
  }
  
}

  