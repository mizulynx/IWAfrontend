
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
 private roles: string[];
 public authority: string;
  info: { token: string; username: string; authorities: string[]; };


  constructor(private tokenStorage: TokenStorageService, private participantListService: ParticipantListService) { }

  ngOnInit(){
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
      this.info = {
        token: this.tokenStorage.getToken(),
        username: this.tokenStorage.getUsername(),
        authorities: this.tokenStorage.getAuthorities()
      };
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
    }
    logout() {
      this.tokenStorage.signOut();
      window.location.reload();
    }
}




  




