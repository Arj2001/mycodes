import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-copit',
  templateUrl: './copit.component.html',
  styleUrl: './copit.component.css'
})
export class CopitComponent {

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static:true})
  serverContentInput: ElementRef
  @Output()
  serverElement = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpElementCreated')
  blueprintElement = new EventEmitter<{serverName: string, serverContent: string}>();

  onAddServer(serverInputValue: string) {
    
    this.serverElement.emit({
      serverName: serverInputValue,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverInputName: HTMLInputElement) {
    this.blueprintElement.emit({
      serverName: serverInputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
