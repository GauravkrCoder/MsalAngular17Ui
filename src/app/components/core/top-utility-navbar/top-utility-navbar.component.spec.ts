import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUtilityNavbarComponent } from './top-utility-navbar.component';

describe('TopUtilityNavbarComponent', () => {
  let component: TopUtilityNavbarComponent;
  let fixture: ComponentFixture<TopUtilityNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopUtilityNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopUtilityNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
