import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string = "ironman";
  public age : number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name } - ${ this.age}`
  }


  public changeHero():void{
    if(this.name === "ironman"){
      this.name = "spiderman";
    } else {
      this.name = "ironman";
    }
  }

  public changeAge():void{
    if(this.age === 45){
      this.age = 22;
    } else {
      this.age = 45;
    }
  }

  public resetForm():void{
    this.name="ironman";
    this.age=45;  
  
  /*   document.querySelectorAll('h1')!.forEach(elemento => {
      elemento.innerHTML ='<h1>Reset feito</h1>';
    }); */
  }
}
