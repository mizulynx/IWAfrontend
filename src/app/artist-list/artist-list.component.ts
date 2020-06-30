import { ArtistModel } from './../artist/artist.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: ArtistModel[];
  addart: ArtistModel[];
  filteredValue: string;
  searchArt: string;
  constructor() {
    const korn = new ArtistModel('KORN', 'Rock', './assets/korn.jpg');
    const crx = new ArtistModel('CRX','Pop', './assets/RedHotChiliPeppers.jpg');
    const tigr3 = new ArtistModel('TIGR3', 'Electro', './assets/RedHotChiliPeppers.jpg');
    const rammstein = new ArtistModel('RAMMSTEIN', 'Metal', './assets/RedHotChiliPeppers.jpg');
    const ira = new ArtistModel('IRA','Rock', './assets/RedHotChiliPeppers.jpg');
    const maroon5 = new ArtistModel('MARRON5', 'Pop', './assets/RedHotChiliPeppers.jpg');
    this.artists = [
      korn, crx, tigr3, rammstein, ira, maroon5
    ];
    this.addart = this.artists;
  }

  ngOnInit(): void {
  }
  filteredGenre(): ArtistModel[]{
      this.artists = this.addart;
    if (this.filteredValue == null) {
      return this.artists;
    }
    return this.artists.filter(artist => artist.genre === this.filteredValue);
  }


  search(): ArtistModel[]{
    this.artists = this.addart;
    console.log(artist=> artist.name);
    console.log(this.searchArt);
    console.log(this.artists.filter(artist => artist.name === this.searchArt.toUpperCase()))
    return this.artists.filter(artist => artist.name == this.searchArt.toUpperCase());

  }

}
