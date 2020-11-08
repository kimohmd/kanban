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
import { AddTableauComponent } from './add-tableau/add-tableau.component';

const appRoutes: Routes = [
  { path: 'utilisateurs', component: DisplayKanbanComponent },
  { path: 'nouvelleFiche', component: AddFicheComponent },
  { path: 'nouveauTableau', component: AddTableauComponent },
  { path: '', component: DisplayKanbanComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DisplayKanbanComponent,
    AddFicheComponent,
    AddTableauComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,  
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [KanbanServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
