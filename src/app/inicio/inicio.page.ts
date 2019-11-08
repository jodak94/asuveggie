import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../services/locales.service';
import { Local } from '../models/Local';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private ls: LocalesService) { }

  ngOnInit() {
    this.getLocales()
  }

  locales: Local[]

  getLocales(){
    this.ls.getLocales().subscribe((data: Local[]) => {
        this.locales = data.locales;
        console.log(this.locales)
    });
  }
}
