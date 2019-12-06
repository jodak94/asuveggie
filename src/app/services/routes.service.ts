import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor() { }

  api_url = 'http://localhost:8000/api/';
  // api_url = 'https://asuveggie.com.py/api';

  locales_url = this.api_url + 'locales';
  local_url = this.api_url + 'locales/detail'
  publicaciones_url = this.api_url + 'publicaciones';
  contacto_url = this.api_url + 'contacto';
  ciudades_url = this.api_url + 'ciudades';

}
