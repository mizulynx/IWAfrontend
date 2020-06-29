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
export class ContactService {

  private contactsUrl = 'http://localhost:8080/restApi/contacts';

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable < Contact[] > {
    return this.http.get<Contact[]>(this.contactsUrl);
  }
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions).pipe(
      tap((contactAdded: Contact) => this.log(`added contact id=${contactAdded.id}`)),
      catchError(this.handleError<Contact>('addContact'))
    );
  }
  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      tap(_ => this.log(`fetched contact id=${id}`)),
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }
  deleteContact(contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete<Contact>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted contact id=${id}`)),
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }

  deleteAllContact(): Observable<any>{
    return this.http.delete(this.contactsUrl, httpOptions).pipe(
      tap(_ => this.log(`deleted all contacts`)),
      catchError(this.handleError<Contact>('deleteContacts'))
    );
  }

  updateContact(contact: Contact): Observable<any> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
    return this.http.put(url, contact, httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  updateAllContacts(contactList: Contact[]): Observable<Contact[]> {
    return this.http.put(this.contactsUrl, contactList, httpOptions).pipe(
      tap(_ => this.log(`updated all contacts`)),
      catchError(this.handleError<any>('updateContacts'))
    );
  }
  updatePartial(contact: Contact): Observable<any> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
    if (contact.firstname.length < 1){
      delete contact.firstname;
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
    return this.http.patch(url, contact, httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
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

  private log(message: string) {
    console.log('ContactService: ' + message);
  }
}
