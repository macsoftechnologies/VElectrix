import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { VElectrixService } from 'src/app/Services/velectrix.service'
import Swal from 'sweetalert2'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-testride',
  templateUrl: './testride.component.html',
  styleUrls: ['./testride.component.scss'],
})
export class TestrideComponent implements OnInit {
  public BookrideForm: FormGroup
  public hasError = false
  vehicleName: any
  vehicleModel: any
  vehicleimage: any
  BrandName: any


  baseUrl: string = environment.baseUrl

  constructor(
    private velectrixservices: VElectrixService,
    private router: Router,
  ) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    this.BookrideForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      aadharNo: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      landMark: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.vehicleName = localStorage.getItem('VehName');
    console.log("vehicle", this.vehicleName)
    this.BrandName = localStorage.getItem('BrandName')
    console.log("Brand", this.BrandName)
    this.vehicleimage = localStorage.getItem('vehicleImage')
    console.log("image", this.vehicleimage)
  }
  bookride() {
    if (this.BookrideForm.valid) {
      const bookrideUpdate = new FormData
      bookrideUpdate.append('name', this.BookrideForm.value.name)
      bookrideUpdate.append('aadharNo', this.BookrideForm.value.aadharNo)
      bookrideUpdate.append('contactNo', this.BookrideForm.value.contactNo)
      bookrideUpdate.append('address', this.BookrideForm.value.address)
      bookrideUpdate.append('area', this.BookrideForm.value.area)
      bookrideUpdate.append('landmark', this.BookrideForm.value.landMark)
      console.log("ndjdj", this.BookrideForm.value.landMark)
      bookrideUpdate.append('city', this.BookrideForm.value.city)
      // bookrideUpdate.append('model', this.BookrideForm.value.vehicleModel)
      bookrideUpdate.append('vehicleName', this.vehicleName)
      bookrideUpdate.append('brand', this.BrandName)
      if(this.vehicleimage) {
        bookrideUpdate.append('vehicleImage', this.vehicleimage)
      }
      console.log("Veh Image", this.vehicleimage)
      

      // let testrideObj = {
      //   name: this.BookrideForm.value.name,
      //   aadharNo: this.BookrideForm.value.aadharNo,
      //   contactNo: this.BookrideForm.value.contactNo,
      //   address: this.BookrideForm.value.address,
      //   area: this.BookrideForm.value.area,
      //   landMark: this.BookrideForm.value.landMark,
      //   city: this.BookrideForm.value.city,
      //   model: this.vehicleModel,
      //   vehicleName: this.vehicleName,
      //   vehicleImage: this.vehicleimage
      // }
      // console.log('test', testrideObj)

      this.velectrixservices.bookride(bookrideUpdate).subscribe((loginResp) => {
        if (loginResp.statusCode == 200) {
          // Swal.fire({
          //   icon: 'success',
          //   text: 'Test ride is initiated ',
          //   showConfirmButton: false,
          //   timer: 3000,
          // })
          console.log('data sent')
          this.router.navigateByUrl('user/confirm Testride')
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Please enter Valid Credentials',
          })
        }
      })
    } else {
      this.hasError = true
      console.log('error caught')
    }
  }

  omit_special_char(event:any)
{   
   var k;  
   k = event.charCode;  //         k = event.keyCode;  (Both can be used)
   return((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57)); 
}

}
