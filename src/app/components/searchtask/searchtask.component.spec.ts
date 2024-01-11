import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtaskComponent } from './searchtask.component';

describe('SearchtaskComponent', () => {
  let component: SearchtaskComponent;
  let fixture: ComponentFixture<SearchtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtaskComponent]
    });
    fixture = TestBed.createComponent(SearchtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
