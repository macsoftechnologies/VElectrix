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
  url: any;


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

  Gotocomps(data: any) {
    console.log(data.url)
    // localStorage.setItem('URL', data.url)
    this.url = data.url
  
    this.router.navigate(['user/' + this.url])
  }
}
