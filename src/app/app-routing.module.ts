import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing-page/landing-page.component'

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {
    scrollPositionRestoration: "top",
    useHash: true,
  }),],
  exports: [RouterModule],
})
export class AppRoutingModule {}
