import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KanbanServiceService} from './/kanban-service.service';
import { AppComponent } from './app.component';
import { DisplayKanbanComponent } from './display-kanban/display-kanban.component';
import {MatTableModule} from '@angular/material/table';
import { AddFicheComponent } from './add-fiche/add-fiche.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'utilisateurs', component: DisplayKanbanComponent },
  { path: 'nouvelleFiche', component: AddFicheComponent },
  { path: '', component: DisplayKanbanComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DisplayKanbanComponent,
    AddFicheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,  
    RouterModule.forRoot(appRoutes)
  ],
  providers: [KanbanServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
