import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components */
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersListComponent},
    { path: 'users/:id', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
