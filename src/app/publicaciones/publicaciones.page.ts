import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../services/publicaciones.service';
import { PublicacionesResponse, Publicacion } from '../models/publicacion';
import { Local } from '../models/Local';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  publicaciones: Publicacion[] = []
  response: PublicacionesResponse;

  constructor(public ps: PublicacionesService, private router: Router) {
    // this.getPublicaciones();
    this.cargaLocal()
  }

  ngOnInit() {
  }

  getPublicaciones(){
    this.ps.getPublicaciones().subscribe((data) => {
        this.response = data;
        if(this.response.error)
          console.log("error")
        else
          this.publicaciones = data.publicaciones;
        console.log(data);
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
    var tem = new Local();
    tem.nombre = "Tembi'u Vegan";
    tem.nombre_ciudad = "Asunción";
    tem.latitud = "-25.291431965194636";
    tem.longitud = "-57.57820844650269";
    tem.id = 30;

    var lm = new Local();
    lm.nombre = "Lomi Veggie";
    lm.nombre_ciudad = "Asunción";
    lm.latitud = "-25.29213524498277";
    lm.longitud = "-57.57820844650269";
    lm.id = 31;

    var sc = new Local();
    sc.nombre = "Señor Conejo";
    sc.nombre_ciudad = "Asunción";
    sc.latitud = "-25.30097682144278";
    sc.longitud = "-57.62967467308045";
    sc.id = 32;

    var ws = new Local();
    ws.nombre = "Wabi Sabi";
    ws.nombre_ciudad = "Asunción";
    ws.latitud = "-25.28738681466239";
    ws.longitud = "-57.644534111022956";
    ws.id = 33;


    var p = new Publicacion();
    p.local = lm;
    p.texto = null;
    p.img = "../assets/test/p1.tmp";
    this.publicaciones.push(p);

    p = new Publicacion();
    p.local = sc;
    p.texto = "Hoy Almorzamos milanesa vegetal (de arvejas y arroz integral) a la napolitana, con ensalada rusa. Podes hacer tu pedido hasta las 10 hs, para pasar a retirar o te enviamos por delivery, el costo de entrega es de 5 mil gs hasta 5 km a la redonda, reservá al 0971317384, gracias!!";
    p.img = "../assets/test/p2.tmp";
    this.publicaciones.push(p);

    p = new Publicacion();
    p.local = ws;
    p.texto = "Menú del Martes 19 #restaurantesasuncion #menudeldiaws";
    p.img = "../assets/test/p3.tmp";
    this.publicaciones.push(p);

    p = new Publicacion();
    p.local = tem;
    p.texto = "Vuelven las pizzas en #tembiuvegan En la feria del 01 de Diciembre podés pedirla entera o por porciones Vení con fliares y amiguis! Nos vemos!";
    p.img = "../assets/test/p4.tmp";
    this.publicaciones.push(p);

    p = new Publicacion();
    p.local = tem;
    p.texto = "Nos vemos en el vegan fest ¿Todavía no te anotaste como feriante? ¡Apurate que la convocatoria se cierra en un par de semanas! Inscribite al nro del flyer. Recordá que podes compartir tu stand ¡Nos vemos!";
    p.img = "../assets/test/p5.tmp";
    this.publicaciones.push(p);
  }

}
