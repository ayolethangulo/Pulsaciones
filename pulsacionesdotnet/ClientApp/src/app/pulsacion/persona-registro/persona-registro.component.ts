import { PersonaService } from './../../services/persona.service';
import { Persona } from './../models/persona';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona;
  }

  add(){
      alert('Se agrego una nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);    
  }
  
  calcularPulsacion(){
    if(this.persona.sexo.toUpperCase() == "F"){
      this.persona.pulsacion = (220-this.persona.edad)/10;
    }else if(this.persona.sexo.toUpperCase() == "M"){
      this.persona.pulsacion = (210-this.persona.edad)/10;
    }else{
      this.persona.pulsacion = 0;
    }
    alert(this.persona.pulsacion);
  }

}
