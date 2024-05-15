import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent {
  inactiveUsers: string[];

  constructor(private users: UsersService, private counter: CounterService){}

  ngOnInit(): void {
      this.inactiveUsers = this.users.inactiveUsers
  }

  onSetToActive(id: number){
    this.users.setToActive(id);
    this.counter.increaseCount();
    console.log('Inactive to Active count:' + this.counter.count);
  }
}
