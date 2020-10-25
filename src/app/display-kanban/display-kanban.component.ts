import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../domain';
import {KanbanServiceService} from '../kanban-service.service';

@Component({
  selector: 'app-display-kanban',
  templateUrl: './display-kanban.component.html',
  styleUrls: ['./display-kanban.component.css'],
  providers: []
})
export class DisplayKanbanComponent implements OnInit {

  utilisateurs: Utilisateur[];
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'fonction'];
  constructor(private kanbanServiceService: KanbanServiceService) { 
    

  }

  ngOnInit(): void {
    this.kanbanServiceService.getAllUtilisateurs().subscribe((data) => {
      this.utilisateurs= data;
      
     })
  }

}
