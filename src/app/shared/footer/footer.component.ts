import { Component, OnInit } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'
import { VElectrixService } from 'src/app/Services/velectrix.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  GreenIcon: any
  color : boolean = true
  greenColor: boolean = false
  GreenColor: any
  // router: any;

  constructor(public Service: VElectrixService, private router: Router) {
    // this.GreenIcon = localStorage.getItem("Green")
    // console.log(typeof(this.GreenIcon))
    // console.log(this.GreenIcon)

    // if(this.GreenIcon) {
    //   console.log("sucess")
    //   this.color = false
    //   this.greenColor = true
    // }
    // else {
    //   console.log("fail")
    //   this.color = true
    //   this.greenColor = false
    // }
    this.GreenColor = Service.colorChangeGreen(); //False
    console.log(this.GreenColor);
  }

  ngOnInit(): void {
    
  }

  showMenu() {
    document.querySelector('.menu')?.classList.toggle('open-menu')
    document.querySelector('.open-icon')?.classList.toggle('close-icon')
  }

  closeMenu() {
    // document.querySelector('.menu')?.classList.toggle('open-menu')
    const removeClass = document.querySelector('.menu')
    removeClass?.classList.remove('open-menu')
  }

  onGreen() {
    this.GreenColor = !this.Service.colorChangeGreen();    //True
  }

  onGrey() {
    this.GreenColor = this.Service.colorChangeGreen();    //false
  }

  gotoHome() {

    this.router.navigateByUrl('/user/Home')
    this.GreenColor = this.Service.colorChangeGreen(); 
  }

}
