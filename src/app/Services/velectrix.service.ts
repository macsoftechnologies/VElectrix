import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class VElectrixService {
  constructor(private httpClient: HttpClient) { }

  public Iscolor: any

  public colorChangeGreen() {
    this.Iscolor = false;
    return this.Iscolor
  }

  // public colorChangeBlue() {
  //   this.Iscolor = true;
  //   return this.Iscolor
  // }

  public bookride(data: any): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + 'book-ride/bookRide',
      data,
    )
  }

  // Get Brands
  public getBrands(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + "brand/brandList")
  }

  // getVehicles By ID
  public getvehiclesByID(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + "color-mapping/getBrandVehicles", data)
  }

  // Get Vehicle Specifications By VEH ID
  public getvehicleSpecs(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + "color-mapping/getSpec", data)
  }

  // get vehicle Images by Vehicle ID
  public getVehiclecolorImages(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + "color-mapping/getVehicleColor", data)
  }

  // get Chargers List 
  public getChargerList(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + "v-energy/listOfChargerss")
  }

  // get Store List
  public getStoreList(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + "stores/storeList");
  }

  // home Banner List

  public getHomeBannerList(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + "image/getImageList");
  }

  
}


