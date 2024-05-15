import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}
  isActive = false;
  private activatedSub: Subscription;

  ngOnInit() {
    this.activatedSub = this.userService.activateEmitter.subscribe(active => this.isActive = active);
  }

  ngOnDestroy(){
    this.activatedSub.unsubscribe()
  }
}
