import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Origin, Reference } from '../models/origin'
@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http:HttpClient) { }
  
  getOrigins() {
   return this.http.get<Origin[]>("origin")
  }
  getReferences() {
    return this.http.get<Reference[]>("reference")
  }
}
