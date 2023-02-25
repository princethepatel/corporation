import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private socket: Socket;
  private url = 'http://44.213.112.56'; // your server local path

  constructor() {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }

  
  createRoom(data:any): void {
    var randNumber = Math.floor(Math.random() * 10000);

    data.roomId="room-"+randNumber;
    data.adminId=this.socket.id;

    this.socket.emit('create-room', data);
  }

  getGeneratedRoomId(): Observable<any> {
    return new Observable<any>(observer => {

      this.socket.on('room-created', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }

    });
  }

  joinRoom(data:any): void {
    data.id=this.socket.id;
    this.socket.emit('join', data);
  }


  roomJoiningStatus(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('joinedRoom', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
      
    });
  }


  UserJoined(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('userJoined', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
      
    });
  }


}
