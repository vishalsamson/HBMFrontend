import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit{

  list=[
    {
      id:1
    }


  ]
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
