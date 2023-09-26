import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];

  public deletedHero?:string;


  public removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }

}