import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  
  { path: 'category', loadChildren: './pages/category/category.module#CategoryPageModule' },
  { path: 'makeup-artist', loadChildren: './pages/makeup-artist/makeup-artist.module#MakeupArtistPageModule' },
  { path: 'hairstyle', loadChildren: './pages/hairstyle/hairstyle.module#HairstylePageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'log-in', loadChildren: './pages/log-in/log-in.module#LogInPageModule' },
  { path: 'reservation', loadChildren: './pages/reservation/reservation.module#ReservationPageModule' },
  { path: 'rating', loadChildren: './pages/rating/rating.module#RatingPageModule' },
  { path: 'review', loadChildren: './pages/review/review.module#ReviewPageModule' },
  { path: 'photogallery', loadChildren: './pages/photogallery/photogallery.module#PhotogalleryPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
