import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

/** Config */
import apiConfig from '../config/api';

/** Models */
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<User> {
        return this.http.get<User>(`${apiConfig.API_URL}/users/${id}`)
            .pipe(
                tap(_ => console.log('fetched user by id'))
            );
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${apiConfig.API_URL}/users`)
            .pipe(
                tap(_ => console.log('fetched all users'))
            );
    }

}
