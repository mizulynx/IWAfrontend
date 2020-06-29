import { HotelService } from './hotel.service';
import { Room } from './room.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [HotelService]
})
export class AdminComponent implements OnInit {

  roomList: Room[];
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void{
    this.hotelService.getRooms().subscribe(roomList => this.roomList = roomList);
  }
    delete(room: Room): void{
      this.roomList = this.roomList.filter(c => c !== room);
      this.hotelService.delete(room).subscribe();
    }
  }

