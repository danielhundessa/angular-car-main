import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('facebook', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
    matIconRegistry.addSvgIcon('twitter', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg'));
    matIconRegistry.addSvgIcon('instagram', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
    matIconRegistry.addSvgIcon('linkedin', domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
  }
}
