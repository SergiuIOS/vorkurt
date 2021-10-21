import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elix-user-name-repository',
  templateUrl: './user-name-repository.component.html',
  styleUrls: ['./user-name-repository.component.scss']
})
export class UserNameRepositoryComponent implements OnInit {
  usersName: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(dataTemplate: any) {
    
  }
}
