import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.css']
})
export class JoinRoomComponent implements OnInit {

  constructor(private api:MainService,private router: Router) { 
  }

  ngOnInit(): void {

    this.api.roomJoiningStatus().subscribe((data) => {

      if(data.status===true)
      {
        this.router.navigate(["room",{"data":JSON.stringify(data)}])
      }
      else
      {
        alert(data.message);
      }

    });
    
  }

  goToCreatingRoom()
  {
    this.router.navigate(["create-room"]);
  }

  public registerObject = { name: '', id: '', roomId: '' };


  joinRoom()
  {
    this.api.joinRoom(this.registerObject);
  }


}
