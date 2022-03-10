import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CharzerComponent } from './charzer/charzer.component';
import { SocketComponent } from './socket/socket.component';
import { ChargingstationComponent } from './chargingstation/chargingstation.component';
import { ServicestationComponent } from './servicestation/servicestation.component';
import { RequestasstComponent } from './requestasst/requestasst.component'

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // FooterComponent,
    LandingPageComponent,
    CharzerComponent,
    SocketComponent,
    ChargingstationComponent,
    ServicestationComponent,
    RequestasstComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
