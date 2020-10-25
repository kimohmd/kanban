import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayKanbanComponent } from './display-kanban.component';

describe('DisplayKanbanComponent', () => {
  let component: DisplayKanbanComponent;
  let fixture: ComponentFixture<DisplayKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
