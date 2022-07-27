import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { VElectrixService } from 'src/app/Services/velectrix.service';
declare const $: any

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
  StoreDetailsList: any;
  storeLocationPoints: any;
  storeIcon: any;
  storeiconn: any;
  StoreDetails: any

  constructor(private vElectrixSerivces: VElectrixService, private router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    // this.getChargersList();
    this.getStoreList();
  }

  getLocation() {
    let currentDateTime = this.datepipe.transform((new Date), 'HH:mm');
    console.log(currentDateTime);
    const mapElement = document.getElementById('map')
    if (mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: this.myLatlng,
        zoom: 10
      });

      const markers = this.StoreDetailsList
      console.log("markers", markers)
      markers.map((marker: { latitude: number; longitude: number; storeId: number, storeOpen: number; storeClose: number }) => {
        const mapMarker = new google.maps.Marker({
          position: new google.maps.LatLng(marker.latitude, marker.longitude),
          map,
          icon: "../assets/images/marker.png"
        })
        mapMarker.addListener('click', function () {
          alert(JSON.stringify(marker))
          $("#exampleModal").modal('show')
          console.log(marker.storeId);
          let format = 'hh:mm:ss';
          // let travelTime = moment().add(0, 'seconds').format('hh:mm A');
          let time = moment(currentDateTime, format)
          console.log(time)
          let beforeTime = moment(marker.storeOpen, format);
          console.log(beforeTime)
          let afterTime = moment(marker.storeClose, format);
          console.log(afterTime)
          if (time.isBetween(beforeTime, afterTime)) {

            console.log('Yasss...! Store Opened')

          } else {

            console.log('Sorryyy...! Store Close')

          }
          // var time = moment('09:34:00', format);
          // let beforeTime = moment('08:34:00', format);
          // let afterTime = moment('10:34:00', format);

          // if (time.isBetween(beforeTime, afterTime)) {

          //   console.log('is between')

          // } else {

          //   console.log('is not between')

          // }
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
        this.StoreDetailsList = storeResp?.Data?.storesList

        // console.log("Array", this.getStoreDetailsList)

        // this.getStoreDetailsList.forEach((item: any) => {
        //   this.locationPoints.push({ longitude: item.longitude, latitude: item.latitude })
        // });

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
