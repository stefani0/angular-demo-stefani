import { Component, Inject } from '@angular/core';
import { navItems } from './_nav';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullAngular';
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public projectYear: string;
  public footerLink: string;

  constructor(@Inject(DOCUMENT) _document?: any) {

   

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized'),
      console.log('change 1', this.changes),
      console.log('this.sidebarMinimized 1',   this.sidebarMinimized)
    });
    this.element = _document.body;
    this.changes.observe( this.element as Element, {
      attributes: true,
      attributeFilter: ['class']
    });

    this.projectYear = environment.projectYear;
    this.footerLink = environment.footerLink;
  }
}
