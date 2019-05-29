import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

/** Config */
import apiConfig from '../config/api';

/** Models */
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

    constructor(private http: HttpClient) { }

    getById(id: number): Observable<Album> {
        return this.http.get<Album>(`${apiConfig.API_URL}/albums/${id}`)
            .pipe(
                tap(_ => console.log('fetched album by id'))
            );
    }

    getByUserId(id: number): Observable<Album[]> {
        return this.http.get<Album[]>(`${apiConfig.API_URL}/albums?userId=${id}`)
            .pipe(
                tap(_ => console.log('fetched albums by user id'))
            );
    }

    getAll(): Observable<Album[]> {
        return this.http.get<Album[]>(`${apiConfig.API_URL}/albums`)
            .pipe(
                tap(_ => console.log('fetched all albums'))
            );
    }

}
