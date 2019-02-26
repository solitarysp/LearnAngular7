import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // setting truyền data thông qua bí danh =
  @Input('appHighlight') highlightColor: string;
  @Input() highlightColorDefault: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('dblclick') onMouseEnter() {
    this.highlight(this.highlightColor ? this.highlightColor : this.highlightColorDefault ? this.highlightColorDefault : 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
