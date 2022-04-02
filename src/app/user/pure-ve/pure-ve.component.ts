import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VElectrixService } from 'src/app/Services/velectrix.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pure-ve',
  templateUrl: './pure-ve.component.html',
  styleUrls: ['./pure-ve.component.scss']
})
export class PureVEComponent implements OnInit {
  BrandName: any;
  getallVehicleDetails: any;
  BrandLogo: any;
  baseUrl: string = environment.baseUrl

  constructor(private VElectrixServices: VElectrixService, private router: Router) { }

  ngOnInit(): void {
    this.BrandName = localStorage.getItem('BrandName');
    this.BrandLogo = localStorage.getItem('BrandImage')
    this.getVehiclesByID();
  }

  getVehiclesByID() {
    let vehicleObj = {
      brandName: this.BrandName
    }

    this.VElectrixServices.getvehiclesByID(vehicleObj).subscribe((vehicleResp) => {
      console.log("Brand Data", vehicleResp);
      if(vehicleResp.StatusCode == 200) {
        this.getallVehicleDetails = vehicleResp.vehicleDetails
      }
    })
  }

  // Goto Vehicle Details
  GotoVehicleDetails(data: any) {
    localStorage.setItem("VehiclecolorID", data.colorId);
    localStorage.setItem("VehicleName", data.vehicleName);
    localStorage.setItem("VehicleModel", data.model)
    this.router.navigateByUrl('user/Models');
  }

}
