import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataTableService} from "../../../shared/utils/services/data-table/data-table.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {SpinnerStateService} from "../../../spinner/spinner-state.service";

@Component({
  selector: 'elix-table-repository',
  templateUrl: './table-repository.component.html',
  styleUrls: ['./table-repository.component.scss']
})
export class TableRepositoryComponent implements OnInit, OnDestroy {
  spinnerState: boolean = false
  columnDefs: any
  defaultColDef: any;
  sideBar: any
  rowGroupPanelShow: any
  pivotPanelShow: any
  rowData: []
  gridApi: GridApi
  paginationSize = 20
  gridOption = <GridOptions>{
    getContextMenuItems: this.getContextMenuItems
  }
  private unSubscribe$: Subject<void> = new Subject<void>()

  constructor(private _dataStore: DataTableService, private _spinnerState: SpinnerStateService) {
    this._spinnerState.setStateBehaviorSpinner(true)
    this.columnDefs = [
      {
        headerName: "Group 1",
        children: [
          {field: "athlete", headerName: 'Athlete', rowGroup: true},
          {field: 'gold'},
          {field: 'sport'}
        ]
      },
      {
        headerName: "Group 2",
        children: [
          {field: 'date', rowGroup: true},
        ]
      },
      {field: "country"}
    ]
    this.defaultColDef = {
      sortable: true,
      resize: true,
      width: 'auto',
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      animateRows: true,
      rowMultiSelectWithClick: true,
      rowSelection: 'multiple',
    }
    this.sideBar = {toolPanels: ['columns']}
    this.rowGroupPanelShow = 'always'
    this.pivotPanelShow = "always"
  }

  ngOnInit(): void {
    this._dataStore.dataStore$
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe(resp => {
          this.rowData = resp
          this._spinnerState.setStateBehaviorSpinner(false)
        }
      )
    this._spinnerState.getState$.subscribe(resp => this.spinnerState = resp)

  }

  onPageChange(event: any) {
    this.gridApi.paginationSetPageSize(Number(event.target.value))
    this._spinnerState.setStateBehaviorSpinner(true)
    setTimeout(() => this._spinnerState.setStateBehaviorSpinner(false), 3000)
  }

  onGridReady(event: GridReadyEvent) {
    this.gridApi = event.api
  }

  getContextMenuItems(params: any) {
    let result = [
      {
        name: 'Alert ' + params.value,
        action: function () {
          window.alert('Alerting about ' + params.value)
        }
      }
    ]
    return result
  }

  ngOnDestroy() {
    this.unSubscribe$.next();
    this.unSubscribe$.complete()
  }
}
