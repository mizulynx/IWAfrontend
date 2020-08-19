import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Artist } from './artist.model';
import { ArtistListService } from '../artist-list/artist-list.service';
import {AppComponent} from '../app.component'
import { TokenStorageService } from '../token-storage.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  providers: [ArtistListService]
})
export class ArtistComponent implements OnInit {
  @HostBinding('attr.class') cssclass = 'row';
  @Input() artists: Artist[];
  @Input() artist: Artist;

  info: any;
  title = 'iwa-http-contacts';
  private roles: string[];
  public authority: string;

  constructor(private tokenStorage: TokenStorageService, private artistListService: ArtistListService) { }

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


updatePartial(id: number, band: string, genre: string, votes: number, approved: number): void {
  id = id;
  genre = genre;
  band = band;
  votes = votes;
  approved = approved;
  this.artistListService.updatePartial({id, band, genre, votes, approved}).subscribe();

  }
  
  delete(artist: Artist): void{
    this.artists = this.artists.filter(c => c !== artist);
    this.artistListService.delete(artist).subscribe()

    

    }
    
    logout() {
      this.tokenStorage.signOut();
      window.location.reload();
    }
  }
  




