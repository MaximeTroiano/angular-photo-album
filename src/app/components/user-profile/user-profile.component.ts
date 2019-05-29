import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Services */
import { UsersService } from 'src/app/services/users.service';
import { AlbumsService } from 'src/app/services/albums.service';

/** Models */
import { User } from 'src/app/models/user';
import { Album } from 'src/app/models/album';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    
    loadingUser: boolean = true;
    loadingAlbums: boolean = true;
    userId: number;
    user: User;
    albums: Album[];
    
    constructor(
        private route: ActivatedRoute,
        private userService: UsersService,
        private albumService: AlbumsService) { }
    
    ngOnInit() {
        this.userId = +this.route.snapshot.paramMap.get('id');

        this.getUser();
        this.getUserAlbums();
    }

    /** Getters */
    getUser(): void {
        this.loadingUser = true;
        this.userService.getById(this.userId)
            .subscribe((user) => { this.user = user; this.loadingUser = false; });
    }

    getUserAlbums(): void {
        this.loadingAlbums = true;
        this.albumService.getByUserId(this.userId)
            .subscribe((albums) => { this.albums = albums; this.loadingAlbums = false; });
    }
    
}
