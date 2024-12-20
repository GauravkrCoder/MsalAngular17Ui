import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericApiMessagesComponent } from './generic-api-messages.component';

describe('GenericApiMessagesComponent', () => {
  let component: GenericApiMessagesComponent;
  let fixture: ComponentFixture<GenericApiMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericApiMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericApiMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
