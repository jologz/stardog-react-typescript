# Getting Started with Stardog React Typescript

This project showcases on how you can utilize [stardog](https://github.com/stardog-union/stardog.js#readme) module on querying your server. You can see how this is being used on [StardogContext.tsx](./src/stardog/StardogContext.tsx). For this example, I've used the express server `https://express.stardog.cloud:5820`, `anonymous` credentials, and `covid19nyt` database. You can see it [here](./src/configuration/AppConfig.tsx).

Google API key is needed for the heatmap.

**Note:** The Google alert box is shown because I am using a free API. You can click `OK`.

![Google HeatMap](./public/covidHeatmapNYT.png)

## Demo

https://jologz.github.io/stardog-react-typescript/

## Environment Variables

-   `REACT_APP_GOOGLE_API_KEY` - Google API Key for Google Maps Javascript

## Run

`npm start`
