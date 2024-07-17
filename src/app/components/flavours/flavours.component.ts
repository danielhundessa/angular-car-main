import { Component } from '@angular/core';
import { ProductCardSliderComponent } from "../home/product-card-slider/product-card-slider.component";
import { forFlavours, lehngacholiPage2 } from '../../Data/Saree/lenghaCholiPage2';
@Component({
  selector: 'app-flavours',
  standalone: true,
  imports: [ProductCardSliderComponent],
  templateUrl: './flavours.component.html',
  styleUrl: './flavours.component.css'
})
export class FlavoursComponent {
  flavour: any;

  constructor() {
    this.flavour = forFlavours.slice(0, 9);
}
}
