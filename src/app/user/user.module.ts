import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './user-routing.module'
import { UserComponent } from '../user/user.component'
import { HomeComponent } from './home/home.component'
import { VEnrouteComponent } from './venroute/venroute.component'
import { VEnergyComponent } from './venergy/venergy.component'
import { VEaseComponent } from './vease/vease.component'
import { VEquipmentComponent } from './vequipment/vequipment.component'
import { VEssentialComponent } from './vessential/vessential.component'
import { HeaderComponent } from '../shared/header/header.component'
import { FooterComponent } from '../shared/footer/footer.component';
import { PureVEComponent } from './pure-ve/pure-ve.component'

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    VEnrouteComponent,
    VEnergyComponent,
    VEaseComponent,
    VEquipmentComponent,
    VEssentialComponent,
    HeaderComponent,
    FooterComponent,
    PureVEComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
