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



  constructor(){
    setTimeout(() => {
      this.allowNesServer = true; 
    }, 2000); 
  }


  onCreateServer(){
    this.serverCreationStatus = 'Server was created ! '; 
  }

}
