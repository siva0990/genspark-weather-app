import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherForecast } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forecasts = signal<WeatherForecast[]>([]);
  loading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  
  totalCount = computed(() => this.forecasts().length);

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.weatherService.getForecasts().subscribe({
      next: (data) => {
        this.forecasts.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching weather data', err);
        this.errorMessage.set('Failed to load weather data. Please check your internet connection or try again later.');
        this.loading.set(false);
      }
    });
  }

  refresh(): void {
    this.fetchWeatherData();
  }
}
