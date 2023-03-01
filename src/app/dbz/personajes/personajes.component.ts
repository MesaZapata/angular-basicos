import { DbzService } from './../services/dbz.service';
import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes:Personaje [] = []
  get personaje(): Personaje[] {
    return this.dbzService.personaje;
  }

  constructor (private dbzService: DbzService) {

  }

}
