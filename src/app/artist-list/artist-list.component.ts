import {  Artist } from './../artist/artist.model';
import { Component, OnInit } from '@angular/core';
import { ArtistListService } from './artist-list.service';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [ArtistListService]
})
export class ArtistListComponent implements OnInit {

  artists: Artist[];
  addart: Artist[];
  filteredValue: string;
  searchArt: string;
  constructor(private artistListService: ArtistListService) {
    this.getArtist();
  }

  ngOnInit(): void {
this.getArtist();
  }

  filteredGenre(): Artist[]{
      this.artists = this.addart;
    if (this.filteredValue == null) {
      return this.artists;
    }
    return this.artists.filter(artist => artist.genre === this.filteredValue);
  }


  search(): Artist[]{
    this.artists = this.addart;
    console.log(artist=> artist.band);
    console.log(this.searchArt);
    console.log(this.artists.filter(artist => artist.band === this.searchArt.toUpperCase()))
    return this.artists.filter(artist => artist.band == this.searchArt.toUpperCase());

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
    
}

  

  getArtist(): void{
    this.artistListService.getArtist().subscribe(artists => this.artists = artists);
  }

  }





























