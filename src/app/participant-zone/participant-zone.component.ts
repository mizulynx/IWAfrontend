import {UserService} from './../user.service';
import {Component, OnInit} from '@angular/core';
import {Participant} from '../participant/participant.model';
import {TokenStorageService} from '../token-storage.service';
import {ParticipantZoneService} from './participant-zone.service';
import { ParticipantListService } from '../participant-list/participant-list.service';

@Component({
  selector: 'app-participant-zone',
  templateUrl: './participant-zone.component.html',
  styleUrls: ['./participant-zone.component.scss'],
  providers: [TokenStorageService, ParticipantListService]
})

export class ParticipantZoneComponent implements OnInit {
  participants: Participant[];


  constructor(private tokenStorageService: TokenStorageService, private participantListService: ParticipantListService) {

  }

  username: string;

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUsername();
    console.log(this.username);
    this.getParticipant();
  }

  getParticipant(): void{
    this.participantListService.getParticipant().subscribe(participants => this.participants = participants);
  }

  updatePartial(id: number, username: string, choice: number, votes: number): void {
    id = id;
    username = username;
    if(choice == 1){
      choice = 1;
    }
    else if(choice == 2){
      choice = 2;
    }
    else {
      choice = 3
    }
    votes = votes;
    this.participantListService.updatePartial({id, username, choice, votes}).subscribe();
  console.log(choice);
  setTimeout(function(){
    window.location.reload(true);
 }, 2000);
    }
}
