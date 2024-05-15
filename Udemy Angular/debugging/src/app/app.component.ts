import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];
  i = 0;

  onAddServer() {
    this.servers.push('Another Server' + (++this.i));
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }
}
