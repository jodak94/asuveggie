import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Local, LocalResponse } from '../models/Local';
import { Horario } from '../models/Horario';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { LocalesService } from '../services/locales.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  local: Local;
  response: LocalResponse;
  latitud: string;
  longitud: string;
  mapa: Map;

  constructor(public ls: LocalesService, public http: HttpClient, private route: ActivatedRoute, private router: Router, public plt: Platform, private launchNavigator: LaunchNavigator) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let local_id = this.router.getCurrentNavigation().extras.state.local.id;
        this.latitud = this.router.getCurrentNavigation().extras.state.local.latitud;
        this.longitud = this.router.getCurrentNavigation().extras.state.local.longitud;
        this.getLocal(local_id);
        // this.getLocalTest();
      }
    });
  }

  getLocalTest(){
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

    // locales: Local[] = []
    var hs: Horario[] = []
    var h = new Horario();
    h.dia = "Lunes a viernes";
    h.hora_fin = "12:00";
    h.hora_inicio = "23:30";
    hs.push(h);

    h = new Horario();
    h.dia = "Sábados";
    h.hora_fin = "18:00";
    h.hora_inicio = "23:30";
    hs.push(h);

    l.horarios = hs;

    this.local = l;
  }

  getLocal(local_id){
    this.ls.getLocal(local_id).subscribe((data) => {
        this.response = data;
        if(this.response.error)
          console.log("error")
        else
          this.local = data.local;

    });
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter")
    this.initMap()
  }

  ngOnAfterViewInit(){
    console.log("ngOnAfterViewInit")
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave")
    console.log(this.mapa)
    this.mapa.remove();
  }

  initMap() {
    this.mapa = new Map('map').setView([this.latitud, this.longitud], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapa);

    const customMarkerIcon = icon({
      iconUrl: '../assets/icon/marker-icon.png',
      // iconSize: [25, 41],
      popupAnchor: [0, -20]
    });

    marker([this.latitud, this.longitud], {icon: customMarkerIcon})
    // .bindPopup(`<b style='font-size:"10px"'>Google maps</b>`, { autoClose: false })
    .on('click', () => console.log("abrir google maps"))
    .addTo(this.mapa).openPopup();
  }



  openOnGoogleMaps(){
    this.launchNavigator.navigate([+this.local.latitud, +this.local.longitud])
    .then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }

  tabs = [
    {'titulo': 'Inicio', 'tab': 'inicio', 'icon': 'home'},
    {'titulo': 'Publicaciones', 'tab': 'publicaciones', 'icon': 'megaphone'},
    {'titulo': 'Mapa', 'tab': 'mapa', 'icon': 'map'}
  ]

  ngOnInit() {
  }

}
