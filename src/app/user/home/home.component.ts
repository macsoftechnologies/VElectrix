import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VElectrixService } from 'src/app/Services/velectrix.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getHomeImgList: any;
  baseUrl: string = environment.baseUrl


  constructor(private VElectrixServices: VElectrixService, private router: Router) { }

  ngOnInit(): void {
    this.getBannersList();
  }

  getBannersList(){
    this.VElectrixServices.getHomeBannerList().subscribe((bannerResp) =>{
      this.getHomeImgList = bannerResp.imageRes;
      console.log('image', this.getHomeImgList)
    })
  }
}
