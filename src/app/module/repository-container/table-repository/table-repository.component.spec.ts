import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableRepositoryComponent} from './table-repository.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TableRepositoryComponent', () => {
  let component: TableRepositoryComponent;
  let fixture: ComponentFixture<TableRepositoryComponent>;
  let spinnerState: boolean
  let shortHand: any
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRepositoryComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spinnerState = fixture.componentInstance.spinnerState
    shortHand = fixture.componentInstance

  });

  it('should create', () => {
    expect(spinnerState).toEqual(false)
  })

  it('Verify pagination size ', () => {
    expect(fixture.componentInstance.paginationSize).toEqual(20)
  })
});
