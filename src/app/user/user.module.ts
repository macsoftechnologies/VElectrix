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
import { FooterComponent } from '../shared/footer/footer.component'
import { PureVEComponent } from './pure-ve/pure-ve.component'
import { ModelsComponent } from './models/models.component'
import { BoomComponent } from './boom/boom.component'
import { TestrideComponent } from './testride/testride.component'
import { LocationComponent } from './location/location.component'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmTestrideComponent } from './confirm-testride/confirm-testride.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
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
    ModelsComponent,
    BoomComponent,
    TestrideComponent,
    LocationComponent,
    ConfirmTestrideComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
  ],
})
export class UserModule {}
