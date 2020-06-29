import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ArtistModel } from './artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @HostBinding('attr.class') cssclass = 'row';
  @Input() artist: ArtistModel;


  constructor() { }

  ngOnInit(): void {
  }

}
