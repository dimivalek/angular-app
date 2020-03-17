import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { NotesComponent } from './notes/notes.component';

import { NotehttpmethodsService } from './note/notehttpmethods.service';
import { AuthService } from './auth/auth.service';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'notes', component: NoteComponent, canActivate: [AuthGuard ]},
  { path: '', component: AuthComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesComponent,
    AuthComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NotehttpmethodsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
