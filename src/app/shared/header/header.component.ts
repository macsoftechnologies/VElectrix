import { Component, OnInit } from '@angular/core'
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
  constructor() {}

  ngOnInit(): void {}

  showMenu() {
    document.querySelector('.menu')?.classList.toggle('open-menu')
    document.querySelector('.open-icon')?.classList.toggle('close-icon')
  }
}
