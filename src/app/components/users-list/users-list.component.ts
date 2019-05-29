import { Component, OnInit } from '@angular/core';

/** Services */
import { UsersService } from 'src/app/services/users.service';

/** Models */
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

    users: User[];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.getUsers();
    }

    /** Getters */
    getUsers(): void {
        this.usersService.getAll()
            .subscribe((users) => this.users = users);
    }

}
