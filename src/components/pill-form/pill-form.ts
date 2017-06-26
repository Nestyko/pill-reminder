import { Component } from '@angular/core';

/**
 * Generated class for the PillFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pill-form',
  templateUrl: 'pill-form.html'
})
export class PillFormComponent {

  text: string;

  constructor() {
    console.log('Hello PillFormComponent Component');
    this.text = 'Hello World';
  }

}
