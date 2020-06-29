import { User } from './user.module';
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

  export class HotelService {

    private roomUrl = 'http://localhost:8080/restApi/rooms';


  constructor(private http: HttpClient) {
}

getRooms(): Observable < Room[] > {
  return this.http.get<Room[]>(this.roomUrl);
}



delete(room: Room | number): Observable<Room> {
  const id = typeof room === 'number' ? room : room.id;
  const url = `${this.roomUrl}/${id}`;

  return this.http.delete<Room>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted room id=${id}`)),
    catchError(this.handleError<Room>('deleteRoom'))
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
