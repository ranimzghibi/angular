import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    CatDetailsComponent,
    DogDetailsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
