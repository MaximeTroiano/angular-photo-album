import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-photo-album';

  page = {
      title: 'Angular Photos',
      author: 'Maxime TROIANO'
  }
}
