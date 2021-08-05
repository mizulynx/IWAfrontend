import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Participant} from '../participant/participant.model';
import {HttpHeaders, HttpClient} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})



export class ParticipantZoneService {

  constructor(private http: HttpClient) { }
  private  participantUrl = 'http://localhost:8080/user';

  getParticipant(participant: Participant): Observable < Participant[] > {

    const username = typeof participant === 'string' ? participant : participant.username;
    
    const url = `${this.participantUrl}/${username}`;
    return this.http.get<Participant[]>(this.participantUrl);
  }

}
