import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcounterComponent } from './postcounter.component';

describe('PostcounterComponent', () => {
  let component: PostcounterComponent;
  let fixture: ComponentFixture<PostcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
