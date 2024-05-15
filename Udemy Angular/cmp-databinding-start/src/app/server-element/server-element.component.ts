import { Component,
        ContentChild,
        ElementRef,
        Input,
        SimpleChanges,
        ViewChild, 
        ViewEncapsulation
        } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated //defualt other values: None, ShadowDom(Eariler Native)
})
export class ServerElementComponent {

  @Input()
  element: {
    type: string,
    content: string,
    name: string
  };
  @Input() name: string;
  @ContentChild('bodyContent', {static: true}) bodyContent: ElementRef;
  @ViewChild('heading', {static:true}) heading: ElementRef;

  constructor(){
    console.log('contstructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    if(changes.name){
      console.log(changes.name.isFirstChange());
      console.log(changes.name.previousValue);
    }
  }

  ngOnInit(){
    console.log('ngOnInit called');
    console.log('Body content is:' + this.bodyContent.nativeElement.textContent)
    console.log('Heading is:' + this.heading.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
    console.log('Body content is:' + this.bodyContent.nativeElement.textContent)
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
    console.log('Heading is:' + this.heading.nativeElement.textContent)
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }
  ngOnDestroy(){
    console.log('onDestroy called')
  }
}
