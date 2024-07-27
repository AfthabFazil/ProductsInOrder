import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    // {
    //   path: '',
    //   component: HomeComponent,
    //   title: 'Home page'
    // },
     // {
    //   path: 'contact',
    //   component: ContactComponent,
    //   title: 'Contact details'
    // },
    // {
    //   path: 'login',
    //   component: LoginComponent,
    //   title: 'Login details'
    // },
    // {
    //   path: 'products/:id',
    //   component: ProductsComponent,
    //   title: 'Product details'
    // }
    {path: '', loadComponent:()=>import('./pages/home/home.component').then((m) => m.HomeComponent)},
    {path: 'contact',loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent)},
    {path: 'login',loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)},
    {path: 'products/:id',loadComponent: () => import('./pages/products/products.component').then((m) => m.ProductsComponent)}
];
