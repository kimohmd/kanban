import { Component, OnInit } from '@angular/core';
import {KanbanServiceService} from '../kanban-service.service';
import {Utilisateur, Fiche, Tableau} from '../domain';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-fiche',
  templateUrl: './add-fiche.component.html',
  styleUrls: ['./add-fiche.component.css']
})
export class AddFicheComponent implements OnInit {

  ficheForm = this.fb.group({
    libelle: ['', [ Validators.required ] ],
    temps: ['', [ Validators.required ] ],
    lieu: ['', [ Validators.required ] ],
    url: ['', [ Validators.required ] ],
    note: ['', [ Validators.required ] ],
    utilisateur: [null, [ Validators.required ] ],
    tableau: [null, [ Validators.required ] ],
  });

  selectedUtilisateur: Utilisateur;
  selectedTableau: Tableau;
  utilisateurs: Utilisateur[];
  tableaux: Tableau[];
  ficheCreated: number;
  constructor(private kanbanServiceService: KanbanServiceService, 
    private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.kanbanServiceService.getAllUtilisateurs().subscribe((data) => {
      this.utilisateurs= data;
      
     })
    this.kanbanServiceService.getAllTableaux().subscribe((data) => {
      this.tableaux= data;
      
     })
  }

  onSubmit(){
    let fiche = new Fiche();
    fiche.libelle=this.ficheForm.controls.libelle.value;
    fiche.lieu=this.ficheForm.controls.lieu.value;
    fiche.temps=this.ficheForm.controls.temps.value;
    fiche.url=this.ficheForm.controls.url.value;
    fiche.note=this.ficheForm.controls.note.value;

    this.kanbanServiceService.addFiche(this.ficheForm.controls.tableau.value.id,this.ficheForm.controls.utilisateur.value.id, JSON.stringify(fiche)).subscribe((data) => {
      this.ficheCreated= data;
      
     })
  }

}
