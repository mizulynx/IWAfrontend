import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist/artist.model';
import { ArtistListService } from '../artist-list/artist-list.service';

@Component({
  selector: 'app-artistview-list',
  templateUrl: './artistview-list.component.html',
  styleUrls: ['./artistview-list.component.scss'],
  providers: [ArtistListService]
})
export class ArtistviewListComponent implements OnInit {
  sort: number;
  artists: Artist[];
  unsorted: Artist[];
  filteredValue: string;
  searchArt: string;
  constructor(private artistListService: ArtistListService) {
    this.getArtist();
    this.sort = 0;

  }
usernam: String;

  ngOnInit(): void {
    this.getArtist();
    this.unsorted = this.artists;
  }
  getArtist(): void{
    this.artistListService.getArtist().subscribe(artists => this.artists = artists);
  }

  sortedArtists2(): Artist[]{

    return this.artists.sort((a: Artist, b: Artist) => b.votes - a.votes);

  }
  sortedArtists(): Artist[]{

    return this.artists.sort((a: Artist, b: Artist) => a.votes - b.votes);
      
  }
  


search(): void{
  console.log(this.searchArt);

}
}
