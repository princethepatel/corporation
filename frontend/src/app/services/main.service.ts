import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private socket: Socket;
  private randWord: String;
  private url = environment.baseUrl; // your server local path

  constructor() {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
    this.randWord = this.generateRandomWord();
  }

  generateRandomWord(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word = "";
    for (let i = 0; i < 4; i++) {
      word += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return word;
  }

  createRoom(data:any): void {
    data.roomId=this.randWord;
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
