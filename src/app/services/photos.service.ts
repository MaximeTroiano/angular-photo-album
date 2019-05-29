import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

/** Config */
import apiConfig from '../config/api';

/** Models */
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

    constructor(private http: HttpClient) { }

    getByAlbumId(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${apiConfig.API_URL}/photos?albumId=${id}`)
            .pipe(
                tap(_ => console.log('fetched photos by album id'))
            );
    }

}
