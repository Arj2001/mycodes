import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output()
  emitNumber = new EventEmitter<number>();
  value = 0;
  incrementingNumber :any;

  onStart() {
    this.incrementingNumber = setInterval(() => {
      console.log(this.value)
      this.emitNumber.emit(++this.value);
    },1000)
  }

  onStop() {
    clearInterval(this.incrementingNumber);
  }

}
