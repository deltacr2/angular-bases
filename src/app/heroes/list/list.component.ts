import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?: string = ''; // variable para almacenar el último héroe borrado

removeLastHero():void{
  this.deletedHero = this.heroNames.pop(); // el pop remueve el último elemento del arreglo y lo retorna
  //console.log({deletedHero});
}

}
