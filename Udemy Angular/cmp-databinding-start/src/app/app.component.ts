import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{
    name: 'A name',
    type: 'blueprint',
    content: 'a content'
  }];

  onAddServer(event :{serverName: string, serverContent: string}){
    this.serverElements.push({
      name: event.serverName,
      type: 'server',
      content: event.serverContent
    })
  }

  onAddBlueprint(event :{serverName: string, serverContent: string}){
    this.serverElements.push({
      name: event.serverName,
      type: 'blueprint',
      content: event.serverContent
    })
  }

  onChange() {
    this.serverElements[0].name = 'changed!';
  }

  onDelete() {
    this.serverElements.splice(0,1)
  }
}
