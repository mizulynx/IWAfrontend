import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { Participant } from '../participant/participant.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListService]
})
export class UserListComponent implements OnInit {
  participants: Participant[];

  constructor(private userListService: UserListService) {
    this.getParticipant();
   }

  ngOnInit(): void {
    this.getParticipant();
  }
  

  getParticipant(): void{
    this.userListService.getParticipant().subscribe(participants => this.participants = participants);
  }
}
