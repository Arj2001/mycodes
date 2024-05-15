import { Component, OnInit } from '@angular/core';
import { AcountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AcountService] //used to instantiate a service so only a new instance of that service is made avialable for all component in this componenet
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];

  constructor(private accountServices: AcountService){
  }

  ngOnInit(): void {
      this.accounts = this.accountServices.accounts;
  }
  
}
