import { Component, OnInit } from '@angular/core';
import {ServiceService}from '../service.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  register: unknown;

  constructor(private api:ServiceService) { }

  ngOnInit(): void {
    this.api.sendData.subscribe(a=>{
      console.log('a',a);

      this.register=a
    })
  }

}
