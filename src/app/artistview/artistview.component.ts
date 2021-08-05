import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Artist } from '../artist/artist.model';

@Component({
  selector: 'app-artistview',
  templateUrl: './artistview.component.html',
  styleUrls: ['./artistview.component.scss']
})
export class ArtistviewComponent implements OnInit {
  @HostBinding('attr.class') cssclass = 'row';
  @Input() artists: Artist[];
  @Input() artist: Artist;
  @Input() filteredValue: string;
  @Input() searchArt: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
