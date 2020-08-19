
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ParticipantListService } from '../participant-list/participant-list.service'
import { TokenStorageService } from '../token-storage.service';
import { Participant } from '../participant/participant.model';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
  providers: [ParticipantListService]
})
export class ParticipantComponent implements OnInit {
  @HostBinding('attr.class') cssclass = 'row';
  @Input() participants: Participant[];
  @Input() participant: Participant;


  constructor(private participantListService: ParticipantListService) { }

  ngOnInit(): void {
  }

  updatePartial(id: number, username: string, choice: number, votes: number): void {
    id = id;
    username = username;
    choice = choice ;
    votes = votes;
    this.participantListService.updatePartial({id, username, choice, votes}).subscribe();
  
    }

}




  




