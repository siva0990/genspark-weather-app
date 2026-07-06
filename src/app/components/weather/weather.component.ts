import { Component, OnInit } from '@angular/core';
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
  forecasts: WeatherForecast[] = [];
  loading = false;
  errorMessage: string | null = null;
  totalCount = 0;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    this.loading = true;
    this.errorMessage = null;
    this.weatherService.getForecasts().subscribe({
      next: (data) => {
        this.forecasts = data;
        this.totalCount = data.length;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching weather data', err);
        this.errorMessage = 'Failed to load weather data. Please check your internet connection or try again later.';
        this.loading = false;
      }
    });
  }

  refresh(): void {
    this.fetchWeatherData();
  }
}
