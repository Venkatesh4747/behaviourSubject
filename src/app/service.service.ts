import { Injectable } from '@angular/core';
import {Subject}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 public sendData=new Subject();

  constructor() { }
  sendIt(reciver:any){
    this.sendData.next(reciver)
  }
}
