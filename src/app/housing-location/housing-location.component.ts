import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink,RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing">
  
    <img class="listing-photo" [src]="hl.photo" alt="Exterior photo of {{hl.name}}">
    <h2 class="listing-heading">{{ hl.name }}</h2>
    <p class="listing-location">{{ hl.city}}, {{hl.state }}</p>
    <a [routerLink]="['/details', hl.id]">More details</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input() hl!:HousingLocation
}
