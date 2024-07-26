import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { DistrictsComponent } from './pages/districts/districts.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact details'
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login details'
      },
      {
        path: 'districts',
        component: DistrictsComponent,
        title: 'District details'
      }
];
