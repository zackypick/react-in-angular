import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter = 21;

  public handleOnClick(stateCounter: number) {
    this.counter++;
  }
}
