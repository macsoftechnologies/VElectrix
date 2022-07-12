import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-requestasst',
  templateUrl: './requestasst.component.html',
  styleUrls: ['./requestasst.component.scss']
})
export class RequestasstComponent implements OnInit {
  public RoadSideForm: FormGroup;
  public hasError = false

  constructor() {
    this.RoadSideForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      Contact: new FormControl('', [Validators.required])
    })

   }

  ngOnInit(): void {
  }

  roadSide(){

  }

}
