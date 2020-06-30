import { User } from '../participant-zone/user.module';
import { Room } from './room.module';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  @Injectable({
    providedIn: 'root'
  })

  export class RoomService {

    private roomUrl = 'http://localhost:8080/restApi/rooms';


  constructor(private http: HttpClient) {
}



addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.roomUrl, room, httpOptions).pipe(
      tap((roomAdded: Room) => this.log(`added room id=${roomAdded.id}`)),
      catchError(this.handleError<Room>('addRoom'))
    );
  }


private log(message: string) {
  console.log('HotelService: ' + message);
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  }
