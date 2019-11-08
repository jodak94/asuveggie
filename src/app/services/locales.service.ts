import { Injectable } from '@angular/core';
import { RoutesService } from './routes.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private rs: RoutesService, private http: HttpClient) {}

  getLocales(){
    return this.http.get(this.rs.locales_url);
  }

}
