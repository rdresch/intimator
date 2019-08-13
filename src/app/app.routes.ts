import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './modules/home/home/home.component';

export const ROUTES: Routes = [
    {path:'home', component: HomeComponent},
    {path: '**', component: HomeComponent}
]

export const routing = RouterModule.forRoot(ROUTES); 