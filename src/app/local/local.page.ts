import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Local } from '../models/Local';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  local: Local;

  constructor(public http: HttpClient, private route: ActivatedRoute, private router: Router, public plt: Platform, private launchNavigator: LaunchNavigator) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.local = this.router.getCurrentNavigation().extras.state.local;
      }
    });
  }

  ngAfterViewInit() {
    this.initMap()
  }

  options: LaunchNavigatorOptions = {
    start: 'London, ON',
    app: LaunchNavigator.APPS.UBER
  }

  initMap() {
    console.log("initMap")
    const map = new Map('map').setView([this.local.latitud, this.local.longitud], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = icon({
      iconUrl: '../assets/icon/marker-icon.png',
      // iconSize: [25, 41],
      popupAnchor: [0, -20]
    });

    marker([this.local.latitud, this.local.longitud], {icon: customMarkerIcon})
    // .bindPopup(`<b style='font-size:"10px"'>Google maps</b>`, { autoClose: false })
    .on('click', () => console.log("abrir google maps"))
    .addTo(map).openPopup();


  }

  openOnGoogleMaps(){
    console.log("openOnGoogleMaps");
    return
    this.launchNavigator.navigate('Toronto, ON', options)
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
