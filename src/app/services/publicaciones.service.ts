import { Injectable } from '@angular/core';
import { RoutesService } from './routes.service';
import { HttpClient } from '@angular/common/http';
import { PublicacionesResponse } from '../models/Publicacion'

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private rs: RoutesService, private http: HttpClient) { }

  getPublicaciones(skip, take){
    return this.http.get<PublicacionesResponse>(this.rs.publicaciones_url + '?skip=' + skip + '&take=' + take);
  }
}
