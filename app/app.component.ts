import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gatoUlt';
  espera=false;
  uno:string='';
  dos:string='';
  tres:string='';
  cuatro:string='';
  cinco:string='';
  seis:string='';
  siete:string='';
  ocho:string='';
  nueve:string='';
  
  recibidoMensaje(mensaje:string){
    this.uno=mensaje;
    this.comprueba()
  }
  recibidoMensajeDos(mensaje:string){
    this.dos=mensaje;
    this.comprueba()
  }
  recibidoMensajeTres(mensaje:string){
    this.tres=mensaje;
    this.comprueba()
  }
  recibidoMensajeCuatro(mensaje:string){
    this.cuatro=mensaje;
    this.comprueba()
  }
  recibidoMensajeCinco(mensaje:string){
    this.cinco=mensaje;
    this.comprueba()
  }
  recibidoMensajeSeis(mensaje:string){
    this.seis=mensaje;
    this.comprueba()
  }
  recibidoMensajeSiete(mensaje:string){
    this.siete=mensaje;
    this.comprueba()
  }
  recibidoMensajeOcho(mensaje:string){
    this.ocho=mensaje;
    this.comprueba()
  }
  recibidoMensajeNueve(mensaje:string){
    this.nueve=mensaje;
    this.comprueba()
  }

  comprueba(){
    if(this.uno=='X' && this.dos=='X' && this.tres=='X' || this.cuatro=='X' && this.cinco=='X' && this.seis=='X'|| this.siete=='X' && this.ocho=='X' && this.nueve=='X'){
      alert('El Jugador Gana Horizonal');
  
      this.espera=false;

      return;
    }
    if(this.uno=='X' && this.cuatro=='X' && this.siete=='X' || this.dos=='X' && this.cinco=='X' && this.ocho=='X'|| this.tres=='X' && this.seis=='X' && this.nueve=='X'){
      alert('El Jugador Gana Vertical');

      this.espera=false;

      return;
    }
    if(this.uno=='X' && this.cinco=='X' && this.nueve=='X' || this.tres=='X' && this.cinco=='X' && this.siete=='X'){
      alert('El Jugador Gana Diagonal');

      this.espera=false;

      return;
    }

    if(this.uno=='O' && this.dos=='O' && this.tres=='O' || this.cuatro=='O' && this.cinco=='O' && this.seis=='O'|| this.siete=='O' && this.ocho=='O' && this.nueve=='O'){
      alert('La maquina Gana Horizontal');

      this.espera=false;

      return;
    }
    if(this.uno=='O' && this.cuatro=='O' && this.siete=='O' || this.dos=='O' && this.cinco=='O' && this.ocho=='O'|| this.tres=='O' && this.seis=='O' && this.nueve=='O'){
      alert('La maquina Gana Vertical');

      this.espera=false;

      return;
    }
    if(this.uno=='O' && this.cinco=='O' && this.nueve=='O' || this.tres=='O' && this.cinco=='O' && this.siete=='O'){
      alert('El Jugador La maquina Gana Diagonal');

      this.espera=false;

      return;
    }
    this.espera=false;

  }
}
