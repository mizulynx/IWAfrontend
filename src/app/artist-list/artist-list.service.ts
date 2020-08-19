import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Artist } from '../artist/artist.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
  static getArtist() {
    throw new Error("Method not implemented.");
  }

  private artistUrl = 'http://localhost:8080/artist';


  constructor(private http: HttpClient) {
}

getArtist(): Observable < Artist[] > {
  return this.http.get<Artist[]>(this.artistUrl);
}

addArtist(artist: Artist): Observable <Artist>{
return this.http.post<Artist>(this.artistUrl, artist, httpOptions).pipe(
  tap((artistAdded: Artist) => this.log('added artist id=${artistAdded.id}')),
  catchError(this.handleError<Artist>('addArtist'))
  );
}
search(searchArt: string): Observable <Artist[]>{
  
  console.log(artist => artist.band);
  console.log(searchArt);
  console.log(artist => artist.filter(artist => artist.band === searchArt.toUpperCase()))

return this.http.get<Artist[]>(this.artistUrl + '/' + searchArt);
}

delete(artist: Artist | number): Observable<Artist> {
  const id = typeof artist === 'number' ? artist : artist.id;
  const url = `${this.artistUrl}/${id}`;

  return this.http.delete<Artist>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted artist id=${id}`)),
    catchError(this.handleError<Artist>('deleteArtist'))
  );
}

updatePartial(artist: Artist): Observable<any> {
  const id = typeof artist === 'number' ? artist : artist.id;
  const url = `${this.artistUrl}/${id}`;
 /* if (artist.votes == null){
    delete artist.firstname;
  }
  if (contact.lastname.length < 1){
    delete contact.lastname;
  }
  if (contact.email.length < 1){
    delete contact.email;
  }
  if (contact.telephone.length < 1){
    delete contact.telephone;
  }
  */
  return this.http.patch(url, artist, httpOptions).pipe(
    tap(_ => this.log(`updated artist id=${artist.id}`)),
    catchError(this.handleError<any>('updateArtist'))
  );
}

private log(message: string) {
  console.log('ArtistService: ' + message);
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
