import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VElectrixService } from 'src/app/Services/velectrix.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  vehicleID: any;
  baseUrl: string = environment.baseUrl
  vehicleData: any;
  VehiclecolorID: any;

  constructor(private vElectrixServices: VElectrixService, private router: Router) { }

  ngOnInit(): void {
    this.VehiclecolorID = localStorage.getItem('VehiclecolorID');
    this.getVehicleDetailsByID();
  }

  getVehicleDetailsByID() {
    let vehicleDetailsObj = {
      colorId: this.VehiclecolorID
    }

    console.log("ID", vehicleDetailsObj)

    this.vElectrixServices.getVehicleDetailsById(vehicleDetailsObj).subscribe((vehicleObj) => {
      if(vehicleObj.StatusCode == 200) {
        this.vehicleData = vehicleObj.vehicleDetails
        console.log("DATA", this.vehicleData)
      }
      else {
        console.log("Test Error")
      }
    })
  }
  

}
