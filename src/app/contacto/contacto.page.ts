import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../services/contacto.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private cs: ContactoService, public toast: ToastController, private router: Router, public alert: AlertController) { }
  data = {
    nombre: '',
    telefono: '',
    direccion: '',
    message: '',
    email: ''
  }

  ngOnInit() {
  }

  submit(){
    this.cs.contacto(JSON.stringify(this.data)).subscribe((status) => {
        if(status == 200){
          this.presentToast('El mensaje se envió correctamente');
          this.router.navigate(['tabs/inicio']);
        }else
          this.presentAlert('Ocurrió un error, verifique su conexión e intentelo de nuevo.')
    });
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      animated: true
    });
    toast.present();
  }

  async presentAlert(message) {
    const alert = await this.alert.create({
      header: 'Error',
      // subHeader: 'Error',
      message: message,
      buttons: [
        {
          text: 'Aceptar',
          role: 'ok'
        }
      ]
    });
    await alert.present();
  }
}
