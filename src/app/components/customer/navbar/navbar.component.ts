import { Component, HostListener, ElementRef, Renderer2  } from '@angular/core';
import { Router } from '@angular/router';

import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarContentComponent,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.menuOpen = false; // Close the menu on navigation
  }


}
