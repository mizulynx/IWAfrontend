import {  Artist } from './../artist/artist.model';
import { Component, OnInit } from '@angular/core';
import { ArtistListService } from './artist-list.service';
import { AppRoutingModule } from '../app-routing.module';
import { TokenStorageService } from '../token-storage.service';
import { ParticipantListService } from '../participant-list/participant-list.service';
import { Participant } from '../participant/participant.model';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [ArtistListService, ParticipantListService, TokenStorageService]
})
export class ArtistListComponent implements OnInit {
  info: any;
  title = 'iwa-project';
  private roles: string[];
  public authority: string;

  sort: number;
  artists: Artist[];
  unsorted: Artist[];
  addart: Artist[];
  participants: Participant[];
  filteredValue: string;
  searchArt: string;
  constructor(private artistListService: ArtistListService, private tokenStorage: TokenStorageService, private participantListService: ParticipantListService) {
    this.getParticipant().then(res => this.getCurrent().then(res2 => console.log("it works")));
    this.getArtist();
    this.sort = 0;
    this.usernam = this.tokenStorage.getUsername();

  }
usernam: String;

  ngOnInit(): void {
    
    this.getParticipant().then(res => this.getCurrent());
this.getArtist();


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
this.unsorted = this.artists;
  }

  filteredGenre(): Artist[]{
      this.artists = this.addart;
    if (this.filteredValue == null) {
      return this.artists;
    }
    return this.artists.filter(artist => artist.genre === this.filteredValue);
  }


  search(): void{
    console.log(this.searchArt);

  }
add(band:string, genre:string, votes: number, approved: number ) : void{
  band = band.trim();
  genre = genre.trim();
  votes = votes;
  approved = approved;
  this.artistListService.addArtist({band, genre, votes, approved} as Artist).subscribe(artist => {this.artists.push(artist);},
    error1 => {},
    () => {},
  );
    setTimeout(function(){
      window.location.reload();
    }, 100)
}

  
getParticipant() {
  return new Promise((resolve, reject) => {
    this.participantListService.getParticipant().subscribe(participants => this.participants = participants);
    setTimeout(function(){
      resolve();
    }, 100)
 
  })}

current:Participant;
currentid: number;

  getCurrent() {
  



    return new Promise((resolve, reject) => {
      this.participants.some(i => {
        if (i.username == this.usernam) {
            this.current = i;
            this.currentid = this.current.id
            console.log(this.current);
        }
    });
   
   
    })
    }
  getArtist(): void{
    this.artistListService.getArtist().subscribe(artists => this.artists = artists);
  }

  sortedArtists2(): Artist[]{
    while(true){
      if(this.current){
    return this.artists.sort((a: Artist, b: Artist) => b.votes - a.votes);
      }
    }
  }
  sortedArtists(): Artist[]{
    while(true){
      if(this.current){
    return this.artists.sort((a: Artist, b: Artist) => a.votes - b.votes);
      }
    }
  }

  }
  





























