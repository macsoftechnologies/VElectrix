import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { CharzerComponent } from './charzer/charzer.component'
import { SocketComponent } from './socket/socket.component'
import { ChargingstationComponent } from './chargingstation/chargingstation.component'
import { ServicestationComponent } from './servicestation/servicestation.component'
import { RequestasstComponent } from './requestasst/requestasst.component'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CarouselModule } from 'ngx-owl-carousel-o';

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
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    CarouselModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
