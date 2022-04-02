import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class VElectrixService {
  constructor(private httpClient: HttpClient) { }


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
    return this.httpClient.post(environment.baseUrl + "vehicle/getBrandVehicle", data)
  }

  // Get Vehicle Details By ID
  public getVehicleDetailsById(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + "vehicle/getVehicleImage", data);
  }
}


