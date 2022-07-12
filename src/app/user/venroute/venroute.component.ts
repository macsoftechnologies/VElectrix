import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VElectrixService } from 'src/app/Services/velectrix.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-venroute',
  templateUrl: './venroute.component.html',
  styleUrls: ['./venroute.component.scss']
})
export class VEnrouteComponent implements OnInit {
  getBrandList: any;
  baseUrl: string = environment.baseUrl
  isLoading = true

  constructor(private VElectrixServices: VElectrixService, private router: Router) { }

  ngOnInit(): void {
    this.GetBrands();
  }

  GetBrands() {
    this.VElectrixServices.getBrands().subscribe((brandResp) => {
      if (brandResp.StatusCode == 200) {
        this.isLoading = false
        this.getBrandList = brandResp.Data.brandsList;
        console.log("data", this.getBrandList)
      }
    })
  }

  GoToProducts(item: any) {
    localStorage.setItem("BrandName", item.brandName);
    localStorage.setItem("BrandImage", item.logo);
    localStorage.setItem("BrandID", JSON.stringify(item.brandId));
    this.router.navigateByUrl('/user/PureVE')
  }


}
