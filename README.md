# Weather_Dashboard
Weather Dashboard

* **The initial page looks like this**

![Home Page](/Assets/AssetsReadme/homepage.png)

### You can access here: [Day Planner](https://herivillaz.github.io/Day-Planner/)

This project was made taking in consideration the following requirements in Columbia Coding Boot Camp:

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Built with

* [Moment.js](https://momentjs.com/)
* [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
* [OpenWeather API](https://openweathermap.org/api)

## Features.

Weather Dashboard App is a sample application using Third-party APIs that can be used to that checks the weather conditions and weather outlook for multiple cities, in that way users can plan a trip accordingly.

* On the left side the user is presented with a search input to look for any City wished. Once the user types the City name. the results are going to be displayed dinamically on the right side of the page.

![Search](/Assets/AssetsReadme/search.png)

* The information is Displayed in a card weather that contains: city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index.

![Card](/Assets/AssetsReadme/card.png)

* The information also displays the weather for the next 5 days providing the weather conditions at a specific time, wich is Noon (12:00:00), this was chosen by the class instructor in order to keep using this API.

![5days](/Assets/AssetsReadme/5day.png)

* Everytime the user search for a city is added to the search history list, in that way he can return to any of the different cities searched before and compare weather conditions.

![List](/Assets/AssetsReadme/list.png)

## Challenge

* No project comes without its own set of difficulties and issues. There were a few things I had issues with along the way. It took me some time to apply the UV index, it was a succesful result once I realized that to apply another API to get this info I needed to give Longitude and Latitude from the initial API.

* Also, to get the daily weather for the next 5 days required "for loop" and "conditions", because this API from OpenWeather gives you the conditions for every 3 hours and I don't think the user wants that, so, definitely to set 12:00 as daily time weather was another challenging part.

* Hope you enjoy my project. Search and Trust my Weather Dashboard.
* I would appreciate your feedback to make this better. Thank You.


