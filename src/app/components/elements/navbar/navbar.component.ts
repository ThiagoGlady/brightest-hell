import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('responsiveMenu') responsiveMenu!: ElementRef;

  showMenu(event: MouseEvent): void {
    const hamburguer = event.target as HTMLElement;

    console.log('clicado');
    console.log(hamburguer.classList);

    if (hamburguer.classList.contains('activate')) {
      hamburguer.classList.remove('activate');
      this.responsiveMenu.nativeElement.classList.remove('activate');
    } else {
      hamburguer.classList.add('activate');
      this.responsiveMenu.nativeElement.classList.add('activate');
    }
  }
}
