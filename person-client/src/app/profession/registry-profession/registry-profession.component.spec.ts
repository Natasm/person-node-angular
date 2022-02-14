import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryProfessionComponent } from './registry-profession.component';

describe('RegistryProfessionComponent', () => {
  let component: RegistryProfessionComponent;
  let fixture: ComponentFixture<RegistryProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryProfessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
