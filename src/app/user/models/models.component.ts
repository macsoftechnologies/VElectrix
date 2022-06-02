import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { VElectrixService } from 'src/app/Services/velectrix.service';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  vehicleID: any;
  baseUrl: string = environment.baseUrl
  vehicleData: any;
  VehicleID: any;
  getVehicleColors: any;
  getVehicleSpecs: any;
  vehModel: any;
  vehPrice: any;
  getPrice: any;
  getModel: any;
  getvehicleName: any;
  currentID: any = 0;
  getvehicleImage: any;

  constructor(private vElectrixServices: VElectrixService, private router: Router) { }

  ngOnInit(): void {
    this.VehicleID = localStorage.getItem('VehicleID');
    this.getVehicleDetailsByID();
  }

  getVehicleDetailsByID() {
    let vehicleDetailsObj = {
      vehicleId: this.VehicleID
    }
    forkJoin(this.vElectrixServices.getvehicleSpecs(vehicleDetailsObj), this.vElectrixServices.getVehiclecolorImages(vehicleDetailsObj)).subscribe((vehRESP) => {
      // console.log("REPSONSE", vehRESP)
      this.getVehicleSpecs = vehRESP[0].colorMappingResponse;
      this.getVehicleColors = vehRESP[1].colorMappingResponse;
      this.getPrice = vehRESP[0].colorMappingResponse[0].amount
      this.getModel = vehRESP[0].colorMappingResponse[0].model
      this.getvehicleName = vehRESP[0].colorMappingResponse[0].vehicleName
      this.getvehicleImage = vehRESP[0].colorMappingResponse[0].vehicleImage
      console.log("price", this.getPrice)
      console.log("vehcolors", this.getVehicleColors)
      console.log("vehspecs", this.getVehicleSpecs)
    })
  }

  testRide() {
    this.router.navigateByUrl('/user/Testride')
    localStorage.setItem('VehName', this.getvehicleName)
    localStorage.setItem('vehicleImage', this.getvehicleImage)
  }

  customOptions: any = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 5000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      400: {
        items: 3
      },
      550: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  colorI(ID: any) {
    this.currentID = ID;
    setTimeout(() => {
      this.currentID = 0;
    }, 100);

    console.log("current", this.currentID)
  }


}
