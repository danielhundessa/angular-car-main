import { Component } from '@angular/core';
import { lehngacholiPage2 } from '../../Data/Saree/lenghaCholiPage2';
import { MainCauroselComponent } from './main-caurosel/main-caurosel.component';
import { ProductCardSliderComponent } from './product-card-slider/product-card-slider.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, MainCauroselComponent, ProductCardSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  flavour: any;

  constructor() {
    this.flavour = lehngacholiPage2.slice(0, 9);

  }
}
