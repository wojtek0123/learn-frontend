import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LearnComponent } from './learn/learn.component';
import { NavigationLinksComponent } from './learn/ui/navigation-links/navigation-links.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'learn',
    component: NavigationLinksComponent,
  },
  {
    path: 'category',
    children: [
      {
        path: ':category',
        component: LearnComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
