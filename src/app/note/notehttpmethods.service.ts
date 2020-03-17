import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NoteFormat } from './noteformat';
//import { Token } from './token';

@Injectable({
  providedIn: 'root'
})

export class NotehttpmethodsService {
  _url: string = `http://localhost:5000/api/notes`;
  constructor(private http: HttpClient) { }
  receiveNotes(byname?: string, bydate?: Date): Observable<NoteFormat[]> {

    if (byname == undefined && bydate == undefined) {
      return this.http.get<NoteFormat[]>(this._url + `/selectallnotes`)
    } else if (byname == undefined && bydate != undefined) {
      return this.http.get<NoteFormat[]>(this._url + `/selectnotes` + `/&?"${bydate}"`);
    } else if (byname != undefined && bydate == undefined) {
      return this.http.get<NoteFormat[]>(this._url + `/selectnotes` + `/?"${byname}"`);
    } else if (byname != undefined && bydate != undefined) {
      return this.http.get<NoteFormat[]>(this._url + `/selectnotes` + `/?"${byname}"/?"${bydate}"`);
    }
  }
  saveNote(note: string, author: string, date: Date) {
    return this.http.get(this._url + `/insertnote/` + `"${note}"&"${author}"&"${date}"`)
      
  }
}
