import { Component, OnInit } from '@angular/core';
import {ServiceService}from '../service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ServiceService) { }

  ngOnInit(): void {
  }
  onSUbmit(reciver:any){
    console.log('form',reciver);

this.api.sendIt(reciver.value);
  }
}
