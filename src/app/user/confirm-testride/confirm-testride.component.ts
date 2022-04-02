import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-testride',
  templateUrl: './confirm-testride.component.html',
  styleUrls: ['./confirm-testride.component.scss']
})
export class ConfirmTestrideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backtohome() {
    this.router.navigateByUrl('/user/Home')
  }

}
