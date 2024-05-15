import { EventEmitter, Injectable } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable()
export class AcountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'hidden'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>;

    constructor(private logging: LoggingService){}
    onAccountAdded(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logging.logStatusChange(status);
    }
    
    onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus
        this.logging.logStatusChange(newStatus);
    }
}