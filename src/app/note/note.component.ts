import { Component, OnInit } from '@angular/core';
import { NotehttpmethodsService } from './notehttpmethods.service';
import { NoteFormat } from './noteformat';
//import { Token } from './token';

import { MatTableModule } from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']

})
 
export class NoteComponent implements OnInit {

  fetchednotes: NoteFormat[];
  newnote: string;
  name: string ;
  date: Date;
  checkdate: boolean;
  checkname: boolean;
  searchname: string;
  searchdate: Date;

  constructor(private _httpservice: NotehttpmethodsService) {

      this.fetchednotes = null;
      this.newnote = "";
      this.name = "";
      this.checkdate = false;
      this.checkname = false;
      this.searchname = "";
      this.searchdate = null;
  }

  onclickFetch() {
  //needs to be refactored
    if (this.checkdate == false && this.checkname == false) {
      this._httpservice.receiveNotes()
        .subscribe(data => this.fetchednotes = data, error => console.log(error));
    } else if (this.checkname == false && this.checkdate == true) {
       this._httpservice.receiveNotes(undefined, this.searchdate);
    } else if (this.checkdate == true && this.checkname == true) {
       this._httpservice.receiveNotes(this.searchname, this.searchdate);
    } else if (this.checkdate == false && this.checkname == true) {
      this._httpservice.receiveNotes(this.searchname, undefined);
    }
  }

  onclickName() {
    this.checkname = !this.checkname;
  }

  onclickDate() {
    this.checkdate = !this.checkdate;
  }

  onclickSave() {
    this._httpservice.saveNote(this.newnote, this.name, this.date)
      .subscribe((data) => console.log(data));
  }
  
  ngOnInit(): void {
  }
}
