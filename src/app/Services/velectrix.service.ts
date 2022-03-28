import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class VElectrixService {
  constructor(private httpClient: HttpClient) {}
  public bookride(data: any): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + 'book-ride/bookRide',
      data,
    )
  }
}

//   try {

//     )
//   } catch (error) {
//     console.log('test')
//   }
// }
