
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { User } from './user.module';









const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  @Injectable({
    providedIn: 'root'
  })

  export class UserService {
    private userUrl = 'http://localhost:8080/restApi/users';
    constructor(private http: HttpClient) {
    }
    getRooms(): Observable < User[] > {
        return this.http.get<User[]>(this.userUrl);
      }