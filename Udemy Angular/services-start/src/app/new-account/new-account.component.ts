import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AcountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(
    // private loggingService: LoggingService, 
    private accountService: AcountService
    ){
      accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      )
    }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.onAccountAdded(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus)
  }
}
