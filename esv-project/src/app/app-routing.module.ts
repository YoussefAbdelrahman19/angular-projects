import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { PrimeTestComponent } from './Components/prime-test/prime-test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path:'home',
    component: PrimeTestComponent
  },
  {
    path: 'seller',
    loadChildren: () =>
      import('src/app/Pages/seller/seller.module').then(
        (m) => m.SellerModule
      ),
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('src/app/Components/user-module/user-module.module').then(
  //       (m) => m.UserModuleModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
