import { UserService } from './../user.service';
import { TokenStorageService } from './../token-storage.service';
import {Component, OnInit} from '@angular/core';
import { RoomService } from './room.service';
import {Room} from './room.module';

@Component({
  selector: 'app-participant-zone',
  templateUrl: './participant-zone.component.html',
  styleUrls: ['./participant-zone.component.scss'],
  providers: [RoomService, UserService]
})
export class ParticipantZoneComponent implements OnInit {
  roomList: Room[];
  cap: number;
  userID: number;

  public authority: string;
  info: any;
  reserved: boolean;
  
  constructor(private tokenStorage: TokenStorageService, private roomService: RoomService) {
    this.reserved = false;
  }

  ngOnInit(): void {}
    add(capacity: number, user_id: number): void {
      capacity = this.cap;
      user_id = this.userID;
      
  
      this.roomService.addRoom({capacity, user_id} as Room)
        .subscribe(room => {this.roomList.push(room); }
        );
        window.location.reload();
    }
  }
