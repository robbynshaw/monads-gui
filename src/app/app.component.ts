import { Component } from '@angular/core';

import { AppListService } from './services/app-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppListService]
})
export class AppComponent {
  title = 'Your Monads Server';
}
