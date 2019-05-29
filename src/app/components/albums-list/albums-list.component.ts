import { Component, OnInit } from '@angular/core';

/** Services */
import { AlbumsService } from 'src/app/services/albums.service';

/** Models */
import { Album } from 'src/app/models/album';

@Component({
    selector: 'app-albums-list',
    templateUrl: './albums-list.component.html',
    styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

    albums: Album[];

    constructor(private albumsService: AlbumsService) { }

    ngOnInit() {
        this.getAlbums();
    }

    /** Getters */
    getAlbums(): void {
        this.albumsService.getAll()
            .subscribe((albums) => this.albums = albums);
    }

}
