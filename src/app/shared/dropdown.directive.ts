import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') dropdownOpen = false;

  @HostListener('click') toggleOpen() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
