import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdSpinner } from '@angular2-material/progress-circle';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-root',

  template: `
  <md-sidenav-layout>
    <md-sidenav #nav mode="over">
      nav Side Drawer
    </md-sidenav>

    <div>
      <md-toolbar color="primary">
        <md-icon>home</md-icon>
        <span>My App</span>
      </md-toolbar>

      <md-spinner *shellRender></md-spinner>
      <h1 *shellNoRender>App is Fully Rendered</h1>

      <h1>My Content</h1>

      <button md-button (click)="nav.toggle()">Toggle nav Side Drawer</button>
    </div>
  </md-sidenav-layout>
  `,

  styles: [`
    md-spinner {
      margin: 24px auto 0;
    }
  `],

  directives: [
    APP_SHELL_DIRECTIVES,
    MdToolbar,
    MdSpinner,
    MD_SIDENAV_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdIcon
  ],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title = 'My app';
}
