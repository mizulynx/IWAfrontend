import { Component, OnInit } from '@angular/core';
import {Participant} from '../partcipant.model'
import { ParticipantListService } from './participant-list.service';
@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss'],
  providers: [ParticipantListService]
})
export class ParticipantListComponent implements OnInit {

  participants: Participant[];

  constructor(private participantListService: ParticipantListService) { 
    this.getParticipant();
  }

  ngOnInit(): void {
    this.getParticipant();
  }
  getParticipant(): void{
    this.participantListService.getParticipant().subscribe(participants => this.participants = participants);
  }
}
