import { Injectable } from '@angular/core';
import { RoutesService } from './routes.service';
import { HttpClient } from '@angular/common/http';
import { LocalResponse } from '../models/Local'

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private rs: RoutesService, private http: HttpClient) {}

  getLocales(){
    return this.http.get<LocalResponse>(this.rs.locales_url);
  }

}
