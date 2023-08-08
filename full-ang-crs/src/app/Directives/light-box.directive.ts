import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') highlightedColor: string = '';
  constructor(private elem: ElementRef) {
    // this.elem.nativeElement.style.border = `1px solid red`;
  }
  ngOnChanges() {
     this.elem.nativeElement.style.border = `1px solid ${this.highlightedColor}`;
  }

  @HostListener('mouseover') mouseOver() {
    this.elem.nativeElement.style.border = `5px solid ${this.highlightedColor}`;
  }
  // @HostListener('mouseleave') mouseLeave() {
  //   this.elem.nativeElement.style.border = '6px solid black';
  // }
}
