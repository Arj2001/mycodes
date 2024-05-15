import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent {
  activeUsers: string[];

  constructor(private users: UsersService, private counter: CounterService){}

  ngOnInit(): void {
      this.activeUsers = this.users.activeUsers
  }

  onSetToInactive(id: number){
    this.users.setToInactive(id);
    this.counter.increaseCount();
    console.log('Active to Inactive count:' + this.counter.count);
  }
}
