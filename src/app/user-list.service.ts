import { Injectable } from '@angular/core';
import { Participant } from './participant/participant.model';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private participantUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }
  
  
  
  
  static getParticipant() {
    throw new Error("Method not implemented.");
  }

  
  

getParticipant(): Observable < Participant[] > {
  return this.http.get<Participant[]>(this.participantUrl);
}


updatePartial(user: Participant): Observable<any> {
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.participantUrl}/${id}`;

  return this.http.patch(url, user, httpOptions).pipe(
    tap(_ => this.log(`updated user id=${user.id}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}

private log(message: string) {
  console.log('userListService: ' + message);
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
