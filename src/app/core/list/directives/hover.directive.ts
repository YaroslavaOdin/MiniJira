import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input('appHover') color: any;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseIn() {
    this.setColor(this.color)
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setColor('black')
  }

  setColor(value: string): void {
    this.el.nativeElement.style.color = `${value}`
  }
}
