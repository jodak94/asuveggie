import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../services/locales.service';
import { LocalResponse, Local } from '../models/Local';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private ls: LocalesService, private router: Router) { }

  ngOnInit() {
    // this.getLocales()
    this.cargaLocal();
  }

  locales: Local[] = []
  response: LocalResponse;

  getLocales(){
    this.ls.getLocales().subscribe((data) => {
        this.response = data;
        if(this.response.error)
          console.log("error")
        else
          this.locales = data.locales;
    });
  }

  irALocal(local){
    let navigationExtras: NavigationExtras = {
      state: {
        local: local
      }
    };
    this.router.navigate(['local'], navigationExtras);
  }

  cargaLocal(){
    var l = new Local();
    l.nombre = "Vegan";
    l.nombre_ciudad = "Villa Elisa";
    l.direccion = "Pedro Peralta 138";
    l.descripcion = "Local vegano / vegetariano ubicado en el centro de Asunción, pasa a disfrutar de una momento increible acompañado de excelente comida."
    l.logo = "../assets/test/cu1.tmp";
    l.telefono = "0972195087";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.293517541643798";
    l.longitud = "-57.61861324310303";
    this.locales.push(l);

    l = new Local();
    l.nombre = "Low Carb";
    l.nombre_ciudad = "Lambare";
    l.direccion = "Cacique 1558";
    l.descripcion = "Local vegano / vegetariano ubicado en el centro de Asunción, pasa a disfrutar de una momento increible acompañado de excelente comida."
    l.logo = "../assets/test/cu2.tmp";
    l.telefono = "0961547831";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.293517541643798";
    l.longitud = "-57.61861324310303";
    this.locales.push(l);

    l = new Local();
    l.nombre = "The Garderia";
    l.nombre_ciudad = "San Lorenzo";
    l.direccion = "Agronomo 57951";
    l.descripcion = "Local vegano / vegetariano ubicado en el centro de Asunción, pasa a disfrutar de una momento increible acompañado de excelente comida."
    l.logo = "../assets/test/cu3.tmp";
    l.telefono = "0581324456";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.293517541643798";
    l.longitud = "-57.61861324310303";
    this.locales.push(l);
  }
}
