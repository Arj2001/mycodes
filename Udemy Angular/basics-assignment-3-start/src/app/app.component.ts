import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayContent = false;
  backgroundColor = 'none'
  logs = [];

  onDisplayDetails(){
    this.displayContent = !this.displayContent;
    this.logs.push(new Date);
      
  }
}