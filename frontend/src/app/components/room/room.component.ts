import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {


  data:any;
  

  constructor(private api:MainService,private router: Router,private route: ActivatedRoute) {

   }

  ngOnInit(): void {

    let data=JSON.parse(this.route.snapshot.paramMap.get("data")!)
    console.log(data);

    this.api.UserJoined().subscribe((data) => {
      console.log(data.users);
      console.log(data.users.length);

      let body=document.getElementById("mainBody");
      
      body!.innerHTML="";

      for (let key in data.users) {
        body!.innerHTML += `
        <div class="p-2 m-2   shadow rounded-2"><div class="" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">${data.users[key].userName}</p>
        </div>
        </div></div>`;        }

    });


    
  }

}
