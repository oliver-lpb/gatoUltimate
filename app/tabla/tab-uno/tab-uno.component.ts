import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { max, withLatestFrom } from 'rxjs';


@Component({
  selector: 'app-tab-uno',
  templateUrl: './tab-uno.component.html',
  styleUrls: ['./tab-uno.component.css']
})
export class TabUnoComponent implements OnInit {

  constructor() { }

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
  

  ngOnInit(): void {
  }
  @Output()
  enviar:EventEmitter<string> = new EventEmitter<string>();
  ganador:string='';

  prueba(){
    if(this.uno=='X' && this.dos=='X' && this.tres=='X' || this.cuatro=='X' && this.cinco=='X' && this.seis=='X'|| this.siete=='X' && this.ocho=='X' && this.nueve=='X'){
      alert('El Jugador Gana Horizonal');
      this.ganador='X'
      this.enviar.emit(this.ganador);
      this.espera=false;

      return;
    }
    if(this.uno=='X' && this.cuatro=='X' && this.siete=='X' || this.dos=='X' && this.cinco=='X' && this.ocho=='X'|| this.tres=='X' && this.seis=='X' && this.nueve=='X'){
      alert('El Jugador Gana Vertical');
      this.ganador='X'
      this.enviar.emit(this.ganador);
      this.espera=false;

      return;
    }
    if(this.uno=='X' && this.cinco=='X' && this.nueve=='X' || this.tres=='X' && this.cinco=='X' && this.siete=='X'){
      alert('El Jugador Gana Diagonal');
      this.ganador='X'
      this.enviar.emit(this.ganador);
      this.espera=false;

      return;
    }

    if(this.uno=='O' && this.dos=='O' && this.tres=='O' || this.cuatro=='O' && this.cinco=='O' && this.seis=='O'|| this.siete=='O' && this.ocho=='O' && this.nueve=='O'){
      alert('La maquina Gana Horizontal');
      this.ganador='O'
      this.enviar.emit(this.ganador);
      this.espera=false;

      return;
    }
    if(this.uno=='O' && this.cuatro=='O' && this.siete=='O' || this.dos=='O' && this.cinco=='O' && this.ocho=='O'|| this.tres=='O' && this.seis=='O' && this.nueve=='O'){
      alert('La maquina Gana Vertical');
      this.ganador='O'
      this.enviar.emit(this.ganador);
      this.espera=false;

      return;
    }
    if(this.uno=='O' && this.cinco=='O' && this.nueve=='O' || this.tres=='O' && this.cinco=='O' && this.siete=='O'){
      alert('El Jugador La maquina Gana Diagonal');
      this.ganador='O'
      this.enviar.emit(this.ganador);
      this.espera=false;

      return;
    }
    this.espera=false;

  }

  punto(caso:string){
    this.espera=true;
    console.log(caso);
    switch(caso){
      case '1':////////////////////////
      
      this.uno='X';
      this.respuesta();
      break;
      case '2':////////////////////////
      this.dos='X';
      this.respuesta();
      break;
      case '3':////////////////////////
      this.tres='X';
      this.respuesta();
        break;
      case '4':////////////////////////
      this.cuatro='X';
      this.respuesta();
        break;
      case '5':////////////////////////
      this.cinco='X';
      this.respuesta();
        break;
      case '6':////////////////////////
      this.seis='X';
      this.respuesta();
        break;
      case '7':////////////////////////
      this.siete='X';
      this.respuesta();
        break;
      case '8':////////////////////////
      this.ocho='X';
      this.respuesta();
        break;
      case '9':////////////////////////
      this.nueve='X';
      this.respuesta();
        break;
      }
  }

  contador:number=0;

  respuesta(){

    if(this.contador==0){
      this.contador=Math.floor(Math.random()*10);
      console.log(this.contador);
      while (this.contador==0) {
        this.contador=Math.floor(Math.random()*10);
        console.log(this.contador);
      }

      switch(this.contador){
        case 1:
          if(this.uno){
            this.dos = 'O';
          }else{
            this.uno = 'O';
          }
          break;
        case 2:
          if(this.dos=='X'){
            this.tres = 'O';
          }else{
            this.dos = 'O';
          }
        break;
        case 3:
          if(this.tres=='X'){
            this.cuatro = 'O';
          }else{
            this.tres = 'O';
          }
        break;
        case 4:
          if(this.cuatro=='X'){
            this.cinco = 'O';
          }else{
            this.cuatro = 'O';
          }
        break;
        case 5:
          if(this.cinco=='X'){
            this.seis = 'O';
          }else{
            this.cinco = 'O';
          }
        break;
        case 6:
          if(this.seis=='X'){
            this.siete = 'O';
          }else{
            this.seis = 'O';
          }
        break;
        case 7:
          if(this.siete=='X'){
            this.ocho = 'O';
          }else{
            this.siete = 'O';
          }
        break;
        case 8:
          if(this.ocho=='X'){
            this.nueve = 'O';
          }else{
            this.ocho = 'O';
          }
        break;
        case 9:
          if(this.nueve=='X'){
            this.ocho = 'O';
          }else{
            this.nueve = 'O';
            
          }
        break;
      }
    }
/////////////////////////////////////////////////////////////////////////////
    if(this.uno == 'X' && this.dos =='X' ){
      if(this.tres=='O' || this.tres=='X'){
      
      }else{
        this.tres = 'O';
        this.prueba();
        return;
      }
    }
/////////////////////////////////////////////////////////////////////////////
    if(this.tres =='X' && this.dos =='X' ){
      if(this.uno=='O' || this.uno=='X'){
        
      }else{
        this.uno = 'O';
        this.prueba();
        return;

      }
    }

    if(this.cuatro =='X' && this.cinco =='X'){
      if(this.seis=='O' || this.seis=='X'){
        
      }else{
        this.seis = 'O';
        this.prueba();
        return;

      }
    }

    if(this.seis =='X' && this.cinco =='X'){
      if(this.cuatro=='O' || this.cuatro=='X'){
        
      }else{
        this.cuatro = 'O';
        this.prueba();
        return;

      }
    }

    if(this.siete =='X' && this.ocho =='X'){
      if(this.nueve=='O' || this.nueve=='X'){
        
      }else{
        this.nueve = 'O';
        this.prueba();
        return;

      }
    }

    if(this.nueve =='X' && this.ocho =='X'){
      if(this.siete=='O' || this.siete=='X'){
        
      }else{
        this.siete = 'O';
        this.prueba();
        return;

      }
    }

    //verticlaes
    if(this.uno =='X' && this.cuatro =='X'){
      if(this.siete=='O' || this.siete=='X'){
        
      }else{
        this.siete = 'O';
        this.prueba();
        return;

      }
    }

    if(this.siete =='X' && this.cuatro =='X'){
      if(this.uno=='O' || this.uno=='X'){
        
      }else{
        this.uno = 'O';
        this.prueba();
        return;

      }
    }

    if(this.dos =='X' && this.cinco =='X'){
      if(this.ocho=='O' || this.ocho=='X'){
        
      }else{
        this.ocho = 'O';
        this.prueba();
        return;

      }
    }

    if(this.ocho =='X' && this.cinco =='X'){
      if(this.dos=='O' || this.dos=='X'){
        
      }else{
        this.dos = 'O';
        this.prueba();
        return;

      }
    }

    if(this.tres =='X' && this.seis =='X'){
      if(this.nueve=='O' || this.nueve=='X'){
        
      }else{
        this.nueve = 'O';
        this.prueba();
        return;

      }
    }

    if(this.nueve =='X' && this.seis =='X'){
      if(this.tres=='O' || this.tres=='X'){
        
      }else{
        this.tres = 'O';
        this.prueba();
        return;

      }
    }

    //diagonales
    if(this.tres =='X' && this.cinco =='X'){
      if(this.siete=='O' || this.siete=='X'){
        
      }else{
        this.siete = 'O';
        this.prueba();
        return;

      }
    }

    if(this.siete =='X' && this.cinco =='X'){
      if(this.tres=='O' || this.tres=='X'){
        
      }else{
        this.tres = 'O';
        this.prueba();
        return;

      }
    }

    if(this.uno =='X' && this.cinco =='X'){
      if(this.nueve=='O' || this.nueve=='X'){
        
      }else{
        this.nueve = 'O';
        this.prueba();
        return;

      }
    }

    if(this.nueve =='X' && this.cinco =='X'){
      if(this.uno=='O' || this.uno=='X'){
        
      }else{
        this.uno = 'O';
        this.prueba();
        return;
        
      }
    }

    //sin uniones////////////////////////////////////////

    if(this.uno =='X' && this.siete =='X' || this.uno =='X' && this.ocho =='X' ||this.uno =='X' && this.nueve =='X' || this.uno =='X' && this.seis =='X' || this.uno =='X' && this.tres =='X'){
      if(this.cinco=='O' || this.cinco=='X'){
        
      }else{
        this.cinco = 'O';
        this.prueba();
        return;
        
      }
    }

    if(this.dos =='X' && this.cuatro =='X' || this.dos =='X' && this.siete =='X' || this.dos =='X' && this.ocho =='X' || this.dos =='X' && this.nueve =='X' || this.dos =='X' && this.seis =='X'){
      if(this.cinco=='O' || this.cinco=='X'){
        
      }else{
        this.cinco = 'O';
        this.prueba();
        return;
        
      }
    }

    if(this.tres =='X' && this.cuatro =='X' || this.tres =='X' && this.siete =='X' || this.tres =='X' && this.ocho =='X' || this.tres =='X' && this.nueve =='X'){
      if(this.cinco=='O' || this.cinco=='X'){
        
      }else{
        this.cinco = 'O';
        this.prueba();
        return;
        
      }
    }

    if(this.cuatro =='X' && this.ocho =='X' || this.cuatro =='X' && this.nueve =='X' || this.cuatro =='X' && this.seis =='X'){
      if(this.cinco=='O' || this.cinco=='X'){
        
      }else{
        this.cinco = 'O';
        this.prueba();
        return;
        
      }
    }

    if(this.seis =='X' && this.dos =='X' || this.seis =='X' && this.siete =='X' || this.seis =='X' && this.ocho =='X'){
      if(this.cinco=='O' || this.cinco=='X'){
        
      }else{
        this.cinco = 'O';
        this.prueba();
        return;
        
      }
    }

    if(this.siete =='X' && this.nueve =='X'){
      if(this.cinco=='O' || this.cinco=='X'){
        
      }else{
        this.cinco = 'O';
        this.prueba();
        return;
        
      }
    }


    this.prueba();

  }



}
