import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscomponentComponent } from './details.component';

describe('DetailscomponentComponent', () => {
  let component: DetailscomponentComponent;
  let fixture: ComponentFixture<DetailscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
