import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') dropdownSelected : boolean = false;

    @HostListener('click') toggle() {
        this.dropdownSelected = !this.dropdownSelected
    }
}


// MY SOLUTION BELOW FOR SECTION 8:
// export class DropdownDirective {
//      @HostBinding('class.open') dropdownSelected : boolean = false;

//      @HostListener('document:click', ['$event']) toggle(event: Event) {
//          this.dropdownSelected = this.elRef.nativeElement.contains(event.target) ? !this.dropdownSelected : false;
//      }

//      constructor(private elRef: ElementRef) {}
// }


