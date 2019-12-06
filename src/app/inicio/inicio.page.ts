import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../services/locales.service';
import { LocalesResponse, Local } from '../models/Local';
import { Router, NavigationExtras } from '@angular/router';
import { Ciudad } from '../models/Ciudad';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private ls: LocalesService, private router: Router) { }

  ngOnInit() {
    this.column = Math.floor(Math.random() * this.cc);
    this.dir = this.dirs[Math.round(Math.random())];
    this.getCiudades();
    this.getLocales()
    // this.cargaLocal();
  }

  locales: Local[] = [];
  ciudades: Ciudad[] = [];
  ciudad_id: String = '';
  response: LocalesResponse;
  skip = 0;
  take = 4;
  column = 0;
  cc = 8; //Max no incluye
  dir = '';
  dirs = ['ASC', 'DESC']

  getCiudades(){
      this.ls.getCiudades().subscribe((data) => {
        this.ciudades = data.ciudades;
      })
  }

  getLocales(event = null){
    console.log(this.ciudad_id);
    this.ls.getLocales(this.skip, this.take, this.column, this.dir, this.ciudad_id).subscribe((data) => {
        this.response = data;
        if(this.response.error)
          console.log("error")
        else
          if(this.skip == 0)
            this.locales = data.locales
          else
            this.locales = this.locales.concat(data.locales);

          if(event != null)
            event.target.complete();
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

  filtrar(event){
    this.column = Math.floor(Math.random() * this.cc);
    this.dir = this.dirs[Math.round(Math.random())];
    this.skip = 0;
    this.getLocales();
  }

  recargar(event){
    this.column = Math.floor(Math.random() * this.cc);
    this.dir = this.dirs[Math.round(Math.random())];
    this.skip = 0;
    this.ciudad_id = 0;
    this.getLocales(event);
  }

  loadData(event){
    this.skip += this.take;
    this.getLocales(event);
  }

  cargaLocal(){
    var l = new Local();
    l.nombre = "Tembi'u Vegan";
    l.nombre_ciudad = "San Lorenzo";
    l.direccion = "Julia Miranda Cueto e/ Gaspar R Francia y Cnel Romero";
    l.descripcion = "FAST FOOD GORDIVEGANA Todas las cosas ricas que te gusta comer en versión vegana! Hamburguesas, pizzas, embutidos, milanesas, quesos, patés, helados, viandas para almuerzo, congelados, boca"
    l.logo = "../assets/test/1.tmp";
    l.telefono = "0972195087";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.291431965194636";
    l.longitud = "-57.57820844650269";
    this.locales.push(l);

    l = new Local();
    l.nombre = "Lomi Veggie";
    l.nombre_ciudad = "Asunción";
    l.direccion = "Senador Long 429 entre del maestro y Moises Bertonii";
    l.descripcion = "Ofrecemos una opción de comida rápida diferente, agregando condimentos y verduras que aportan nutrientes al cuerpo. Lomito arabe, LomiFalafel, Falafel, Hamburguesa de Garbanzo, Hamburguesa"
    l.logo = "../assets/test/2.tmp";
    l.telefono = "0961547831";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.29213524498277";
    l.longitud = "-57.578632235527046";
    this.locales.push(l);

    l = new Local();
    l.nombre = "Señor Conejo";
    l.nombre_ciudad = "Asunción";
    l.direccion = "Adela Speratti c/ Gral. Santos";
    l.descripcion = "Preparamos los mas deliciosos alimentos libres de gluten,proteína animal y azúcar refinada,por que podes comer delicioso y alimentar a tu cuerpo y tu alma."
    l.logo = "../assets/test/3.tmp";
    l.telefono = "0581324456";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.30097682144278";
    l.longitud = "-57.62967467308045";
    this.locales.push(l);

    l = new Local();
    l.nombre = "Wabi Sabi";
    l.nombre_ciudad = "Asunción";
    l.direccion = "Rpca. Francesa 266 c/ Eligio Ayala";
    l.descripcion = "En un antiguo local conocido por los amantes de la comida oriental, WABI SABI abre sus puertas con un diferencial: el sabor."
    l.logo = "../assets/test/4.tmp";
    l.telefono = "(021) 222 784";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.28738681466239";
    l.longitud = "-57.644534111022956";
    this.locales.push(l);

    l = new Local();
    l.nombre = "La vida verde";
    l.nombre_ciudad = "Asunción";
    l.direccion = "Austria 1510 e/San martin y O'higgins";
    l.descripcion = "La Vida Verde Restaurante, ofrecemos una amplia variedad de opciones vegetarianas. Almuerzos, meriendas y cenas. Platos vegetarianos y veganos, además de la inconfundible comida china."
    l.logo = "../assets/test/5.tmp";
    l.telefono = "(021) 661 570";
    l.galeria = [
      "../assets/test/g1.tmp",
      "../assets/test/g2.tmp",
      "../assets/test/g3.tmp",
      "../assets/test/g4.tmp"
    ];
    l.latitud = "-25.305933254164618";
    l.longitud = "-57.644534111022956";
    this.locales.push(l);
  }
}
