import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { JoinRoomComponent } from './components/join-room/join-room.component';
import { RoomJoinedComponent } from './components/room-joined/room-joined.component';
import { RoomComponent } from './components/room/room.component';
import { GameRulesComponent } from './components/game-rules/game-rules.component';

const routes: Routes = [
  { path: '', component: JoinRoomComponent },
  { path: 'room', component: RoomComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'room-joined', component: RoomJoinedComponent },
  { path: 'game-rules', component: GameRulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
