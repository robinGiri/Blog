import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
