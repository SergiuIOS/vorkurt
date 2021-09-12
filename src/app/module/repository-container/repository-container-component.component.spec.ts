import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RepositoryContainerComponentComponent} from './repository-container-component.component';

describe('RepositoryContainerComponentComponent', () => {
  let component: RepositoryContainerComponentComponent;
  let fixture: ComponentFixture<RepositoryContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryContainerComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
