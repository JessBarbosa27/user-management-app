import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V1HomeComponent } from './v1-home.component';

describe('V1HomeComponent', () => {
  let component: V1HomeComponent;
  let fixture: ComponentFixture<V1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V1HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
