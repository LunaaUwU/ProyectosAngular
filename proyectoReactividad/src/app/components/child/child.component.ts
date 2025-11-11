import { Component, inject } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent
{
  dataService = inject(DataApiService);
}