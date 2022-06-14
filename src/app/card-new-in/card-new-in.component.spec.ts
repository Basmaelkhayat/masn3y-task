import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewInComponent } from './card-new-in.component';

describe('CardNewInComponent', () => {
  let component: CardNewInComponent;
  let fixture: ComponentFixture<CardNewInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNewInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
