import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryServicesService {

  constructor(private http:HttpClient) { 

  }

  public covid9Reports(){
   return this.http.get("https://corona.lmao.ninja/v2/countries");   
  }

}
