import { Component } from '@angular/core';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <button md-raised-button>RAISED</button>
  `,
  styles: [],
  directives: [APP_SHELL_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
