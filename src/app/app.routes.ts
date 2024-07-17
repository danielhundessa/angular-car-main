import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FlavoursComponent } from './components/flavours/flavours.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';


export const routers: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'flavour', component: FlavoursComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
 
  //   {path: 'admin',loadChildren:()=>import("./Module/admin/admin-routing.module").then(m=>m.AdminRoutingModule)}
];
