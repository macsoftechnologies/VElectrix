import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FooterComponent } from '../shared/footer/footer.component'
import { HeaderComponent } from '../shared/header/header.component'
import { HomeComponent } from './home/home.component'
import { ModelsComponent } from './models/models.component'
import { PureVEComponent } from './pure-ve/pure-ve.component'
import { UserComponent } from './user.component'
import { VEaseComponent } from './vease/vease.component'
import { VEnergyComponent } from './venergy/venergy.component'
import { VEnrouteComponent } from './venroute/venroute.component'
import { VEquipmentComponent } from './vequipment/vequipment.component'
import { VEssentialComponent } from './vessential/vessential.component'

const routes: Routes = [
  {
    path: '',
    component: UserComponent,

    children: [
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'VEnroute',
        component: VEnrouteComponent,
      },
      {
        path: 'VEnergy',
        component: VEnergyComponent,
      },
      {
        path: 'VEase',
        component: VEaseComponent,
      },
      {
        path: 'VEquipment',
        component: VEquipmentComponent,
      },
      {
        path: 'VEssential',
        component: VEssentialComponent,
      },
      {
        path: 'Header',
        component: HeaderComponent,
      },
      {
        path: 'Footer',
        component: FooterComponent,
      },
      {
        path: 'PureVE',
        component: PureVEComponent,
      },
      {
        path: 'Models',
        component: ModelsComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
