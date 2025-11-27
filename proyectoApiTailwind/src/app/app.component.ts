import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService, UserData } from './services/api.service';


Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Proyecto Api Tailwind';

  data: UserData[] = [];
  loading: boolean = true;
  error: boolean = false;

  private apiService = inject(ApiService);
  private cdr = inject(ChangeDetectorRef);

  @ViewChild("chart") private chartRef!: ElementRef;
  chart: any;

  ngOnInit()
  {
    this.fetchData();
  }

  fetchData()
  {
    this.loading = true;
    this.apiService.getUsers().subscribe(
      {
        next: (response) =>
        {
          this.data = response;
          this.loading = false;
          this.cdr.detectChanges();
          this.createChart();
        },
        error: () =>
        {
          this.error = true;
          this.loading = false;
        }
      });
  }

  createChart()
  {
    if(!this.chartRef) return;

    const labels = this.data.map(user => user.company.name);
    const values = this.data.map(user => user.company.catchPhrase.length);

    this.chart = new Chart(this.chartRef.nativeElement, 
      {
        type: 'bar',
        data: 
        {
          labels: labels,
          datasets:
          [{
              label: 'Company Catch-phrase Length',
              data: values,
              backgroundColor: 'rgba(59, 130, 246, 0.5)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1
            }]
        },
        options:
        {
          responsive: true,
          maintainAspectRatio: false,
          scales:
          {
            y:
            {
              beginAtZero: true,
              max: 50,
              ticks:
              {
                stepSize: 10
              }
            }
          }
        }
      }
    );
  }
}
