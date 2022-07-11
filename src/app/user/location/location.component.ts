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
  marker: any
  myLatlng = { lat: 17.6851, lng: 83.2035 }
  ChargerList: any;
  getPoints = [];
  markerslengths: any;
  locationPoints: any = [];
  getStoreDetailsList: any;
  storeLocationPoints: any;
  storeIcon: any;
  storeiconn: any;

  constructor(private vElectrixSerivces: VElectrixService, private router: Router) { }

  ngOnInit(): void {
    // this.getChargersList();
    this.getStoreList();
  }

  getLocation() {
    const mapElement = document.getElementById('map')
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: this.myLatlng,
        zoom: 10
      });

      const markers = this.locationPoints
      console.log("markers", markers)
      markers.map((marker: { latitude: number; longitude: number }) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(marker.latitude, marker.longitude),
          map,
          icon: "../assets/images/marker.png"
        })
      })
      // this.marker = new google.maps.Marker({
      //   position: this.myLatlng,
      //   map,
      //   title: "Hello World!",
      //   icon: "../assets/images/pointer.png"
      // });
    }
  }

  // getChargersList() {
  //   this.vElectrixSerivces.getChargerList().subscribe((chargerResp) => {
  //     if(chargerResp.StatusCode == 200) {
  //       this.ChargerList = chargerResp?.Data?.UserDetails
  //       console.log("list",this.ChargerList)
  //        this.ChargerList.forEach((item:any) => {
  //         this.locationPoints.push(item.location)
  //       });
  //       this.getLocation()
  //       console.log("arr",this.locationPoints)
  //     }
  //   })
  // }


  getStoreList() {
    this.vElectrixSerivces.getStoreList().subscribe((storeResp) => {
      if (storeResp.StatusCode == 200) {
        this.getStoreDetailsList = storeResp?.Data?.storesList

        console.log("Array", this.getStoreDetailsList)

        this.getStoreDetailsList.forEach((item: any) => {
          this.locationPoints.push({ longitude: item.longitude, latitude: item.latitude })
        });

        // this.getStoreDetailsList.forEach((item: any) => {
        //   this.locationPoints.push(item.storeIcon)
        //   this.storeiconn = item.storeIcon
        // })

        

        this.getLocation();
        // console.log("Points", this.storeLocationPoints)
      }
    })
  }

}
