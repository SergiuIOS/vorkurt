import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'iufce-repository-container-component',
  templateUrl: './repository-container-component.html',
  styleUrls: ['./repository-container-component.sass']
})
export class RepositoryContainerComponent implements OnInit {
  name: string = 'Sami'
  constructor() {
  }

  ngOnInit(): void {
  }

}
