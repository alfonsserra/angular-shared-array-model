import { Component } from '@angular/core';
import { ComponentOneComponent } from '../component-one/component-one.component';

@Component({
  selector:    'app-component-two',
  templateUrl: './component-two.component.html'
})
export class ComponentTwoComponent extends ComponentOneComponent {

}
