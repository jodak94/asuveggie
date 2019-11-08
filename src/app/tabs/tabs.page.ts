import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  tabs = [
    {'titulo': 'Inicio', 'tab': 'inicio', 'icon': 'home'},
    {'titulo': 'Publicaciones', 'tab': 'publicaciones', 'icon': 'megaphone'},
    {'titulo': 'Mapa', 'tab': 'mapa', 'icon': 'map'}
  ]
}
