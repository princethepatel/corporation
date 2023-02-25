import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor(private router: Router,private api:MainService) { }

  public registerObject = { name: '',roomName: '', roomId: '',adminId:'' };

  
  ngOnInit(): void {

    this.api.getGeneratedRoomId().subscribe((data) => {

      this.registerObject.roomId=data.roomId;
      
      alert(`Room created \nName ="${data.name}" \nRoom Id ="${data.roomId}"  \nCopy the room assigned id`);

      this.router.navigate(["room",{"data":JSON.stringify(data)}])

    });

  }

  goToJoinRoom()
  {
    this.router.navigate([""]);
  }

  createRoom()
  {
    this.api.createRoom(this.registerObject);
  }

}
