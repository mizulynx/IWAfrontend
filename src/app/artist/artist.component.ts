import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Artist } from './artist.model';
import { ArtistListService } from '../artist-list/artist-list.service';
import {AppComponent} from '../app.component'
import { TokenStorageService } from '../token-storage.service';
import { __await } from 'tslib';
import { ArtistListComponent } from '../artist-list/artist-list.component';
import { Participant } from '../participant/participant.model';
import { ParticipantListService } from '../participant-list/participant-list.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [ArtistListService, ParticipantListService]
})
export class ArtistComponent implements OnInit {
  @HostBinding('attr.class') cssclass = 'row';
  @Input() artists: Artist[];
  @Input() artist: Artist;
  @Input() filteredValue: string;
  @Input() searchArt: string;
  @Input() participants: Participant[];
  @Input() current: Participant;
  info: any;
  title = 'iwa-http-contacts';
  private roles: string[];
  public authority: string;

  constructor(private tokenStorage: TokenStorageService, private artistListService: ArtistListService, private participantListService: ParticipantListService ) { }
  usernam: string;

  
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
      this.usernam = this.tokenStorage.getUsername();
      
    console.log(this.artist)
    if(this.authority == 'user'){
    }
  }


updatePartial(id: number, band: string, genre: string, votes: number, approved: number): void {
  id = id;
  genre = genre;
  band = band;
  votes = votes;
  approved = approved;
  this.artistListService.updatePartial({id, band, genre, votes, approved}).subscribe();
  setTimeout(function(){
    window.location.reload();
  }, 100)
  }
  
  delete(artist: Artist): void{
    this.artists = this.artists.filter(c => c !== artist);
    this.artistListService.delete(artist).subscribe()
    setTimeout(function(){
      window.location.reload();
    }, 100)

    }
    
  
    logout() {
      this.tokenStorage.signOut();
    }



  updatePartialuser(id: number, username: string, choice: number, votes: number): void {
    id = id;
    username = this.usernam;
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
    this.participantListService.updatePartial2({id, username, choice, votes}).subscribe();
  console.log(choice);

    }
    submit():void{

      this.updatePartial(this.artist.id , this.artist.band, this.artist.genre, this.artist.votes + 1, 0);  this.updatePartialuser(this.current.id, this.current.username, this.current.choice, this.current.votes -1);
      setTimeout(function(){
        window.location.reload();
      }, 100) 
    }
      
    
  }





