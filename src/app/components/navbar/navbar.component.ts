import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store, createSelector, select } from '@ngrx/store';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
   
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
}
