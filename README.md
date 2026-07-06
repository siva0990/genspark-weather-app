# Weather Forecast Application

A simple Angular application that retrieves and displays 5-day weather forecasts from a REST API, featuring a responsive UI and automated deployment to GitHub Pages via GitHub Actions.

## Project Description

This project is a lightweight weather dashboard that displays forecast data (date, temperature in Celsius and Fahrenheit, and condition summaries) from a public REST API. It is designed to work across both desktop and mobile screens.

### Features
- **API Integration**: Connects to the provided Weather Forecast API endpoint using Angular's HttpClient.
- **Record Statistics**: Displays the total count of loaded forecast records.
- **Highlight Hot Days**: Highlights table rows in a warm color when the temperature exceeds 30°C.
- **Refresh Data**: Includes a Refresh button to trigger new API requests on-demand.
- **Responsive Layout**: Adapts using CSS media queries to support desktop, tablet, and mobile views.
- **CI/CD Pipeline**: Deploys automatically to GitHub Pages using GitHub Actions on every push to the `main` branch.

---

## Technical Details

- **Angular Version**: 22.0.5
- **Node.js**: v24.18.0+
- **HTTP Client**: Standalone `provideHttpClient` configuration

---

## Live Deployment

The application is deployed publicly at:
👉 **[https://siva0990.github.io/genspark-weather-app/](https://siva0990.github.io/genspark-weather-app/)**

---

## Installation and Run Steps

Follow these steps to run the application locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or newer recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/siva0990/genspark-weather-app.git
cd genspark-weather-app
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Locally
Start the local development server:
```bash
npm start
```
Open your browser and navigate to `http://localhost:4200/` (or `http://localhost:4300/` if port 4200 is occupied).

### 5. Build for Production
To build the static assets manually:
```bash
npm run build
```
The output will be compiled to the `dist/weatherapp/browser/` directory.
