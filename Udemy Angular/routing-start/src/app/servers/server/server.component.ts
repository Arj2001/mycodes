import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // let serverId: number = Number(this.route.snapshot.params['id']);
    // let serverId: number = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(serverId);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id'])
    //   }
    // )
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onEdit() {
    // this.router.navigate(['servers', this.server.id, 'edit'])
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }

}
