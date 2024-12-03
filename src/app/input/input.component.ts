/*
* File: input.component.ts
* Author: Erős István
* Copyright: 2024, Erős István
* Group: Szoft II-2-E
* Date: 2024-12-03
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  area !: number;
  height !: number;
  volume !: number;

  startCalc(){
    console.log("Számítás indul...");
    this.volume = this.area * this.height / 3;
  }
}
