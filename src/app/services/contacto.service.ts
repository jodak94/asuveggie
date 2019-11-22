import { Injectable } from '@angular/core';
import { RoutesService } from './routes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private rs: RoutesService, private http: HttpClient) { }

  contacto(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(data)
    return this.http.post(
      this.rs.contacto_url,
      data
      //,httpOptions
    );
  }
}
