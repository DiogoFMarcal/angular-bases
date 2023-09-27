import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: "Personagem Um", power: 100 },
    { id: uuid(), name: "Personagem Dois", power: 200 },
    { id: uuid(), name: "Teste deuc certo", power: 200 }
  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      id: uuid(), ...character
    };

    this.characters.push(newCharacter);
  };

  /*   onDeleteCharacter(index: number): void {


      this.characters.splice(index, 1);
    }; */

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }




}
