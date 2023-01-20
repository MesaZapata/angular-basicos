import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string [] = ['Spiderman','Ironman','Hulk','Thor','Deadpool']

  heroeBorrado: string = '';


  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
