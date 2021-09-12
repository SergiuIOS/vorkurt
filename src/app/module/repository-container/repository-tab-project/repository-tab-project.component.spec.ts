import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RepositoryTabProjectComponent} from './repository-tab-project.component';

describe('RepositoryTabProjectComponent', () => {
  let component: RepositoryTabProjectComponent;
  let fixture: ComponentFixture<RepositoryTabProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryTabProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryTabProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
