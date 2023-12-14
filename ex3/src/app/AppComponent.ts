import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template:`,
  <p>Foreground: <input [(ngModel)]="fg" /></p>
    <p>Background: <input [(ngModel)]="bg" /></p>
    <div [ngStyle]="{'color': fg, 'background-color': bg, 'padding': '5px'}">
                    zone de test
    </div>
  `,
  styles: []
})
export class AppComponent {
  fg = "#ffffff";
  bg = "#000000";
}
