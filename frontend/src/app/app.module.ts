import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinRoomComponent } from './components/join-room/join-room.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';

import { FormsModule } from '@angular/forms';
import { RoomComponent } from './components/room/room.component';
import { RoomJoinedComponent } from './components/room-joined/room-joined.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinRoomComponent,
    CreateRoomComponent,
    RoomComponent,
    RoomJoinedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
