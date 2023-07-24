import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNesServer = false;
  serverCreationStatus = 'No server was created ! ';
  serverName = 'Testserver'; 
  serverCreated = false; 



  constructor(){
    setTimeout(() => {
      this.allowNesServer = true; 
    }, 2000); 
  }


  onCreateServer(){
    this.serverCreated = true ;
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName; 
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
