import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor(private sidebarService: NbSidebarService) {}
  ngOnInit(): void {}

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }
}
