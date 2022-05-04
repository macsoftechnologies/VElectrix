import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VElectrixService } from 'src/app/Services/velectrix.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  chargerList: any;

  constructor(private vElectrixSerivces: VElectrixService, private router: Router) { }

  ngOnInit(): void {
    this.getChargersList();
  }

  getChargersList() {
    this.vElectrixSerivces.getChargerList().subscribe((chargerResp) => {
      if(chargerResp.StatusCode == 200) {
        this.chargerList = chargerResp.Data.UserDetails
        console.log("Charger List", this.chargerList)
      }
    })
  }

}
