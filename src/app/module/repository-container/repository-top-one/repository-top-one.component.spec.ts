import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryTopOneComponent } from './repository-top-one.component';

describe('RepositoryTopOneComponent', () => {
  let component: RepositoryTopOneComponent;
  let fixture: ComponentFixture<RepositoryTopOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryTopOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryTopOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
