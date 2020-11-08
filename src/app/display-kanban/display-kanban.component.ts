import { Component, OnInit } from '@angular/core';
import {Fiche, Utilisateur} from '../domain';
import {KanbanServiceService} from '../kanban-service.service';

@Component({
  selector: 'app-display-kanban',
  templateUrl: './display-kanban.component.html',
  styleUrls: ['./display-kanban.component.css'],
  providers: []
})
export class DisplayKanbanComponent implements OnInit {
 
  
  fiches: Fiche[];
  displayedColumns: string[] = ['id', 'libelle', 'date', 'temps', 'lieu', 'url', 'note', 'etat', 'utilisateur'];
  constructor(private kanbanServiceService: KanbanServiceService) { 
    

  }

  ngOnInit(): void {
    this.kanbanServiceService.getAllFiches().subscribe((data) => {
      this.fiches= data;
      
     })
  }

}
