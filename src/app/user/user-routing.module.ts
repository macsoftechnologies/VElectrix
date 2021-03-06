import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ChargingstationComponent } from '../chargingstation/chargingstation.component'
import { CharzerComponent } from '../charzer/charzer.component'
import { RequestasstComponent } from '../requestasst/requestasst.component'
import { ServicestationComponent } from '../servicestation/servicestation.component'
import { FooterComponent } from '../shared/footer/footer.component'
import { HeaderComponent } from '../shared/header/header.component'
import { SocketComponent } from '../socket/socket.component'
import { BoomComponent } from './boom/boom.component'
import { ConfirmTestrideComponent } from './confirm-testride/confirm-testride.component'
import { HomeComponent } from './home/home.component'
import { LocationComponent } from './location/location.component'
import { ModelsComponent } from './models/models.component'
import { PureVEComponent } from './pure-ve/pure-ve.component'
import { TestrideComponent } from './testride/testride.component'
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
      {
        path: 'Boom',
        component: BoomComponent,
      },
      {
        path: 'Testride',
        component: TestrideComponent,
      },
      {
        path: 'Location',
        component: LocationComponent,
      },
      {
        path: 'Charzer',
        component: CharzerComponent,
      },
      {
        path: 'Socket',
        component: SocketComponent,
      },
      {
        path: 'Chargingstation',
        component: ChargingstationComponent,
      },
      {
        path: 'Servicestation',
        component: ServicestationComponent,
      },
      {
        path: 'Requestasst',
        component: RequestasstComponent,
      },
      {
        path: 'confirm Testride',
        component: ConfirmTestrideComponent
      }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
