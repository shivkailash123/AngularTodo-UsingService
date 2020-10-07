import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  sharedData:Todo[];
  id:number;

  constructor() { console.log(this.sharedData)}
}
