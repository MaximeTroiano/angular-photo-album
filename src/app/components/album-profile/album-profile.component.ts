import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Services */
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from 'src/app/models/photo';

@Component({
    selector: 'app-album-profile',
    templateUrl: './album-profile.component.html',
    styleUrls: ['./album-profile.component.scss']
})
export class AlbumProfileComponent implements OnInit {
    
    loading: boolean = true;
    albumId: number;
    photos: Photo[];

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotosService) { }
    
    ngOnInit() {
        this.albumId = +this.route.snapshot.paramMap.get('id');

        this.getPhotos();
    }
    
    /** Getters */
    getPhotos(): void {
        this.loading = true;
        this.photoService.getByAlbumId(this.albumId)
            .subscribe((photos) => { this.photos = photos; this.loading = false; });
    }
    
}
