import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VElectrixService } from '../Services/velectrix.service';
declare const $: any

@Component({
  selector: 'app-chargingstation',
  templateUrl: './chargingstation.component.html',
  styleUrls: ['./chargingstation.component.scss']
})
export class ChargingstationComponent implements OnInit {

  marker: any
  myLatlng = { lat: 17.6851, lng: 83.2035 }
  ChargerList: any;
  getPoints = [];
  markerslengths: any;
  locationPoints: any = [];
  getLatitude: any;
  getlongitude: any;
  constructor(private vElectrixServices: VElectrixService, private router: Router) { }

  ngOnInit(): void {

    this.getChargersList();


  }

  getLocation() {
    const mapElement = document.getElementById('map')
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: this.myLatlng,
        zoom: 10
      });

      const markers = this.ChargerList
      console.log("markers", markers)
      markers.map((marker: { latitude: number; longitude: number }) => {
        const mapMarker = new google.maps.Marker({
          position: new google.maps.LatLng(marker.latitude, marker.longitude),
          map,
          icon: "../assets/images/marker.png"
        })
        mapMarker.addListener('click', function () {
          $("#exampleModal").modal('show')
        })

      })
      // this.marker = new google.maps.Marker({
      //   position: this.myLatlng,
      //   map,
      //   title: "Hello World!",
      //   icon: "../assets/images/pointer.png"
      // });
    }

    // const mapElement = document.getElementById('map')
    // if (mapElement) {
    //   const map = new google.maps.Map(mapElement, {
    //     center: this.myLatlng,
    //     zoom: 9
    //   });

    //   const markers = this.locationPoints
    //   console.log("markers", markers)
    //   markers.map((marker: { latitude: number; longitude: number }) => {
    //     new google.maps.Marker({
    //       position: new google.maps.LatLng(marker.latitude, marker.longitude),
    //       map,
    //       icon: "../assets/images/pointer.png"
    //     })
    //   })
    //   this.marker = new google.maps.Marker({
    //     position: this.myLatlng,
    //     map,
    //     title: "Hello World!",
    //     icon: "../assets/images/pointer.png"
    //   });
    // }

  }

  getChargersList() {
    this.vElectrixServices.getChargerList().subscribe((listResp) => {
      if (listResp.StatusCode == 200) {

        this.ChargerList = listResp?.Data?.UserDetails

        this.getLatitude = listResp.Data.UserDetails.latitude
        this.getlongitude = listResp.Data.UserDetails.longitude


        console.log("list", this.ChargerList)
        this.ChargerList.forEach((item: any) => {
          this.locationPoints.push({ longitude: item.longitude, latitude: item.latitude })
        });
        this.getLocation()
        console.log("arr", this.locationPoints)
        // this.getPoints = Object.assign({}, listResp.Data.UserDetails.location)

        // console.log("List", this.ChargerList)
        // console.log("points", this.getPoints)
      }
    })
  }


}
