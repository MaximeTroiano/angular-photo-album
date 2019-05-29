import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/** Services */
import { UsersService } from 'src/app/services/users.service';

/** Models */
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    
    user: User;
    
    constructor(
        private route: ActivatedRoute,
        private userService: UsersService) { }
    
    ngOnInit() {
        this.getUser();
    }

    /** Getters */
    getUser(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getById(id)
            .subscribe((user) => this.user = user);
    }
    
}
