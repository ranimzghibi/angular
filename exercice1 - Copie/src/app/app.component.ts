import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})

 export class AppComponent {
  notes:String[]=[]
  n:String=''
  filterText: string = ''; 
  constructor(private dataService: DataService) { }
  Init(){
    this.notes = this.dataService.getNotes();
  }
  addnotes(){
    const noteInput = (document.getElementById("note") as HTMLInputElement).value;
    this.dataService.addNote(noteInput)
  }
  filterNotes() {
    this.notes = this.dataService.getNotes().filter(note => {
      return note.toLowerCase().includes(this.filterText.toLowerCase());
    });
  }
 
}
