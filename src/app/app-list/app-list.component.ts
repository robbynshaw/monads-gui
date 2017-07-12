import { Component, OnInit } from '@angular/core';

import { App } from '../../lib/config/app';
import { AppListService } from '../services/app-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  apps: App[];
  errorMsg: string;

  constructor(private appListService: AppListService) { }

  ngOnInit() {
    this.getApps();
  }

  getApps(): void {
    this.appListService.getApps().subscribe(
      apps => {
        console.log('apps', apps);
        this.apps = apps;
      },
      error => this.errorMsg = <any>error
    );
  }

}
