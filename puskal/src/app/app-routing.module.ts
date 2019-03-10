import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id/', component: HomeComponent },
  { path: 'about-me',   component: AboutMeComponent },
  { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  PageNotFoundComponent,
                                  HomeComponent,
                                  AboutMeComponent
                             ]