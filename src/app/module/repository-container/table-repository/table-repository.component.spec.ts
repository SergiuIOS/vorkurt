import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableRepositoryComponent} from './table-repository.component';

describe('TableRepositoryComponent', () => {
  let component: TableRepositoryComponent;
  let fixture: ComponentFixture<TableRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRepositoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
