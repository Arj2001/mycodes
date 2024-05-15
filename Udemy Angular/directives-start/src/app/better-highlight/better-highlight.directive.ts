import { Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defualtColor: string = 'black';
  @Input('appBetterHighlight') highlightColor: string = 'red';
  @HostBinding('style.color') color: string;

  constructor(private elementRef: ElementRef,private renederer: Renderer2) { }

  ngOnInit(): void {
      // this.renederer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
      this.color = this.defualtColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    console.log(eventData);
    
    // this.renederer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.renederer.addClass(this.elementRef.nativeElement,'bg-warning')
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.renederer.removeClass(this.elementRef.nativeElement,'bg-warning')
    // this.renederer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.color = this.defualtColor;
  }


}
