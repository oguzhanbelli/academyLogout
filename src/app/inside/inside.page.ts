import { Component, OnInit } from '@angular/core';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {
  logoutTimer= this.accesService.logoutTimer.asObservable();

  constructor(private accesService:AccessService) { }

  ngOnInit() {
  }
 ionViewDidEnter(){
this.accesService.resetLogoutTimer();
 }
}
