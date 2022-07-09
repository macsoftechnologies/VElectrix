import { Component, OnInit } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showMenu() {
    document.querySelector('.menu')?.classList.toggle('open-menu')
    document.querySelector('.open-icon')?.classList.toggle('close-icon')
  }
}
