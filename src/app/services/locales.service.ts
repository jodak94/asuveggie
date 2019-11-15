import { Injectable } from '@angular/core';
import { RoutesService } from './routes.service';
import { HttpClient } from '@angular/common/http';
import { LocalResponse, LocalesResponse } from '../models/Local'

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private rs: RoutesService, private http: HttpClient) {}

  getLocales(){
    return this.http.get<LocalesResponse>(this.rs.locales_url);
  }

  getLocal(local_id){
    return this.http.get<LocalResponse>(this.rs.local_url + '?local_id=' + local_id);
  }

}
