import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LearnComponent } from './learn/learn.component';
import { LearnLayoutComponent } from './layout/learn-layout/learn-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'articles',
        component: ArticleComponent,
      },
    ],
  },
  {
    path: 'learn',
    component: LearnLayoutComponent,
    children: [
      {
        path: '',
        component: LearnComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  // {
  //   path: 'category',
  //   component: LearnLayoutComponent,
  //   children: [
  //     {
  //       path: ':category',
  //       component: LearnComponent,
  //     },
  //     {
  //       path: '**',
  //       component: NotFoundComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
