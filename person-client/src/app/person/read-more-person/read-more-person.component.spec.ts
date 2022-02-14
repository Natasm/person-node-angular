import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMorePersonComponent } from './read-more-person.component';

describe('ReadMorePersonComponent', () => {
  let component: ReadMorePersonComponent;
  let fixture: ComponentFixture<ReadMorePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMorePersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMorePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
