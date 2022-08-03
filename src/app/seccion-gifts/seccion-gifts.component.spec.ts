import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionGiftsComponent } from './seccion-gifts.component';

describe('SeccionGiftsComponent', () => {
  let component: SeccionGiftsComponent;
  let fixture: ComponentFixture<SeccionGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionGiftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
