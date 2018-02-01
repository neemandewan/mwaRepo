import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'guards-component',
  template: `
    <h2>
      Error!!
    </h2>
    <p> Oops!! Something went wrong... </p>

    <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
  `
})
export class GuardsComponent {

  constructor(private router: Router) {}

  onNavigate() {
      this.router.navigate(['/']);
  }

}
