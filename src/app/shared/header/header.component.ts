import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
declare const $: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  document: any
  querySelector: any
  classList: any
  constructor(private router: Router) {}

  ngOnInit(): void {}

  showMenu() {
    document.querySelector('.menu')?.classList.toggle('open-menu')
    document.querySelector('.open-icon')?.classList.toggle('close-icon')
  }

  onGreen() {
    localStorage.setItem("Green", String(true))
    this.router.navigateByUrl('user/VEnergy')
    console.log("Green")
  }

  onGrey() {
    localStorage.removeItem("Green")
    console.log("Remove")
  }


}
