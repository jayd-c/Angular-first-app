import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
        [CommonModule,
        HousingLocationComponent
      ],
  template: `
      <section>
        <form action="">
          <input type="text" placeholder="Filer by city" #filter>
          <button class="primary" type="button" (click)="filterResults(filter.value)" >Search</button>
        </form>
      </section>
      <section class="results">
        <app-housing-location *ngFor="let hl of filteredLocationList" [hl]="hl"></app-housing-location>
      </section>
      
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  filteredLocationList:HousingLocation[] = [];
  housingLocationList: HousingLocation[] = [];
  housingService:HousingService = inject(HousingService);

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  
}
