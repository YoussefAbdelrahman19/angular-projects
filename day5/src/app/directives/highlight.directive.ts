import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') hcolor = "red";
  @Input() dcolor = "green";
  @HostListener("mousemove")
  move() {
    this.el.nativeElement.style.backgroundColor = this.hcolor;
  }
  @HostListener("mouseleave")
  leave() {
    this.el.nativeElement.style.backgroundColor = this.dcolor;
  }
  constructor(public el: ElementRef) { }

}
