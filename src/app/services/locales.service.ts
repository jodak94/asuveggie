import { Injectable } from '@angular/core';
import { RoutesService } from './routes.service';
import { HttpClient } from '@angular/common/http';
import { LocalResponse, LocalesResponse } from '../models/Local';
import { CiuadesResponse } from '../models/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(private rs: RoutesService, private http: HttpClient) {}

  getLocales(skip, take, column, dir, ciudad_id){
    let params = '?skip=' + skip + '&take=' + take + '&column=' + column + '&dir=' + dir;
    if(ciudad_id != '')
      params += "&ciudad_id=" + ciudad_id;
    return this.http.get<LocalesResponse>(this.rs.locales_url + params);
  }

  getLocal(local_id){
    return this.http.get<LocalResponse>(this.rs.local_url + '?local_id=' + local_id);
  }

  getCiudades(){
    return this.http.get<CiudadResponse>(this.rs.ciudades_url);
  }

}
