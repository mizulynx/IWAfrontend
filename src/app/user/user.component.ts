import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { UserListService } from '../user-list.service';
import { TokenStorageService } from '../token-storage.service';
import { Participant } from '../participant/participant.model';

@Component({
  selector: 'app-participant',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserListService]
})
export class UserComponent implements OnInit {
  @HostBinding('attr.class') cssclass = 'row';
  @Input() participants: Participant[];
  @Input() participant: Participant;



  constructor( private userListService: UserListService) { }

  ngOnInit(){

   
  }

  
  updatePartial(id: number, username: string, choice: number, votes: number): void {
    id = id;
    username = username;
    choice = choice ;
    votes = votes;
    this.userListService.updatePartial({id, username, choice, votes}).subscribe();
  
    }


}


