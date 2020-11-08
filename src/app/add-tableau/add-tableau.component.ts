import { Component, OnInit } from '@angular/core';
import {KanbanServiceService} from '../kanban-service.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NewTableau } from '../domain';


@Component({
  selector: 'app-add-tableau',
  templateUrl: './add-tableau.component.html',
  styleUrls: ['./add-tableau.component.css']
})
export class AddTableauComponent implements OnInit {

  constructor(private kanbanServiceService: KanbanServiceService, 
    private fb: FormBuilder) { 
  }


  tabForm = this.fb.group({

    titre: ['', [ Validators.required ] ],
   
  });
  tabCreated: number;
 
  ngOnInit(): void {
  
  }

  onSubmit(){
    let newTab= new NewTableau();
    newTab.titre=this.tabForm.controls.titre.value;
    
    this.kanbanServiceService.addTableau(JSON.stringify(newTab)).subscribe((data) => {
      this.tabCreated= data;
      
     })
  }

}
