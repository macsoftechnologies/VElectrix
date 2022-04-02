import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { VElectrixService } from 'src/app/Services/velectrix.service'
import Swal from 'sweetalert2'

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
    this.vehicleName = localStorage.getItem('VehicleName');
    this.vehicleModel = localStorage.getItem('VehicleModel')
  }
  bookride() {
    if (this.BookrideForm.valid) {
      let testrideObj = {
        name: this.BookrideForm.value.name,
        aadharNo: this.BookrideForm.value.aadharNo,
        contactNo: this.BookrideForm.value.contactNo,
        address: this.BookrideForm.value.address,
        area: this.BookrideForm.value.area,
        landMark: this.BookrideForm.value.landMark,
        city: this.BookrideForm.value.city,
        model: this.vehicleModel,
        vehicleName: this.vehicleName
      }
      console.log('test', testrideObj)

      this.velectrixservices.bookride(testrideObj).subscribe((loginResp) => {
        if (loginResp.statusCode == 200) {
          Swal.fire({
            icon: 'success',
            text: 'Test ride is initiated ',
            showConfirmButton: false,
            timer: 3000,
          })
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
}
