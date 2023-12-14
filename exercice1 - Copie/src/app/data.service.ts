import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  notes: String []=[]
  addNote(note:String){
    this.notes.push(note)
  }
  getNotes():String []{
    return this.notes
  }
  //constructor() { }
  
}
