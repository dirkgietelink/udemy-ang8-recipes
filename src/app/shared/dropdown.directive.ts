import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') dropdownOpen = false;

  constructor(private elRef: ElementRef) {}

  // @HostListener('click') toggleOpen() {
  //   this.dropdownOpen = !this.dropdownOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.dropdownOpen = this.elRef.nativeElement.contains(event.target) ? !this.dropdownOpen : false;
  }

}
