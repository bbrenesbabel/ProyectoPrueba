import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionStickersComponent } from './seccion-stickers.component';

describe('SeccionStickersComponent', () => {
  let component: SeccionStickersComponent;
  let fixture: ComponentFixture<SeccionStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionStickersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
