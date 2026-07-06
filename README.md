# AeroTemp - Angular Weather Application

A lightweight, premium weather dashboard built with Angular that consumes a public Weather forecast REST API and automatically deploys to GitHub Pages using GitHub Actions.

## Project Description

AeroTemp is a responsive single-page web dashboard designed to retrieve and display 5-day weather forecasts from a REST API. It is styled with a modern glassmorphic look, supporting desktop and mobile browsers.

### Features
- **API Integration**: Connects to the public weather forecast endpoint.
- **Dynamic Statistics**: Displays total forecast count (Bonus 1).
- **Temperature Alerts**: Highlights rows where temperature exceeds 30°C using a distinct warn background color (Bonus 2).
- **Manual Data Refresh**: Includes a refresh action button with an active spinning loading indicator (Bonus 3).
- **Responsive Layout**: Designed using CSS flexbox/grid and media queries to adapt to desktop and mobile screens.
- **Automated CI/CD**: Automatic deployment to GitHub Pages via GitHub Actions upon push to the `main` branch.

---

## Technical Details

- **Angular Version**: 22.0.5
- **Node.js Compatibility**: v24.18.0+
- **HTTP Client**: Angular `HttpClient` (Standalone Providers configuration)

---

## Deployment URL

The live application is hosted on GitHub Pages:
👉 **[https://siva0990.github.io/genspark-weather-app/](https://siva0990.github.io/genspark-weather-app/)**

---

## Installation and Run Steps

Follow these steps to run the application locally:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.x or newer recommended).

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
Start the development server:
```bash
npm start
```
Open your browser and navigate to `http://localhost:4200/`.

### 5. Build for Production
To build the application bundle manually:
```bash
npm run build
```
The output will be stored in the `dist/weatherapp/` directory.
