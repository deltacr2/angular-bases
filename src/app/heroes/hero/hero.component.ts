import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName ():string {
    // Los Getters lucen como propiedades

    // return 'Hola Mundo'.toUpperCase();
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
// Este es un método
    // ` // posiblemente es el caracter backtears (buscar en el teclado)
    return `${this.name} - ${this.age}`;
  }

  public changeHero():void {
    //TODO:
    // throw 'Método no implementado';
    this.name = 'Spiderman';
  }

  public changeAge():void {
    this.age = 33;
  }

  public resetForm():void {
    //this.name = 'ironman';
    this.age = 45;
    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>'; // modifica el texto del 1er <h1> con el texto <h1>Desde Angular</h1>
    document.querySelectorAll('h1')!.forEach( element => {element.innerHTML = '<h1>Desde Angular</h1>'}); // modifica el texto de todos los <h1> del archivo.html</h1>
  }
  

}
