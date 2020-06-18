$(document).ready(function () {
    // Show current Date on the DOM
    $("#today").text(moment().format('LLL'));

    var InputUser = "";
    // Clear Data for new Search
    function clear() {
        $("#forecast1").empty();
        $("#forecastRow").empty();
        $("#fiveDayForecast").empty();
        $("#search-value").val("");
    };

    function ajaxCall() {
        // Get API key. 
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=571d9f58c398657c20313ac4142d50fd&us&mode&units=imperial&q=" + InputUser;
        // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?appid=571d9f58c398657c20313ac4142d50fd&us&mode&q=" + InputUser; // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=london&appid=571d9f58c398657c20313ac4142d50fd" + InputUser;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
            console.log(data);

            // clear forecast body
            clear();
            var location = $("#forecast1");
            var listHistory = $(".list-group");
            if (location) {
                var list = $("<li>");
                list.addClass("list");
                list.attr("id", data.city.name);
                list.text(data.city.name);
                listHistory.prepend(list);
            }
            // Get UV index 
            var lat = data.city.coord.lat;
            var lon = data.city.coord.lon;
            // API for UV
            var uvUrl = 'https://api.openweathermap.org/data/2.5/uvi?appid=' + window.API_key + '&lat=' + lat + '&lon=' + lon;
            $.get(uvUrl, function (uvData) {
                console.log(uvData);
                var uvIndex = uvData.value;
                console.log(lat, lon);
                // Use jQuery to Print all my weather data to the DOM
                var bootstrapCardEl = $('<div class="card bg-info" style="width: 16rem;"></div>');
                var cardImgEl = $('<img src="http://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png" class="card-img-top" alt="..."></img>');
                var cardBodyEl = $('<div class="card-body">' + '<h5>' + data.city.name + ' , ' + data.city.country + '</h5>' + '</div>')
                var h5El = $('<h5 class="card-title">' + data.list[0].weather[0].main + ' -- ' + data.list[0].weather[0].description + '</h5>')
                var bodytemp = $('<p class="card-text">' + 'Temp: ' + data.list[0].main.temp + 'º' + '<br>' + 'Feels Like: ' + data.list[0].main.feels_like + 'º' + '<br>' + 'Min. ' + data.list[0].main.temp_min + 'º' + ' | Max. ' + data.list[0].main.temp_max + 'º' + '<br>' + 'Humidity: ' + data.list[0].main.humidity + '%' + '<br>' + 'Wind Speed: ' + data.list[0].wind.speed + ' mph' + '</p>');
                var bodyPEl = $('<p class="card-text">' + 'UV:  ' + uvIndex + '</p>');
                cardBodyEl.append(h5El).append(bodytemp).append(bodyPEl);
                bootstrapCardEl.append(cardImgEl).append(cardBodyEl);
                $("#forecast1").append(bootstrapCardEl);
                // Loop thru and print the forecast days same way with for loop
            });

            // 3-5 days forecast
            var forecastRowTitle = $("<div>");
            forecastRowTitle.addClass("col-lg-12 forecast").css({ "font-size": "30px", "color": "blue", "padding": "20px" });
            forecastRowTitle.text("5-day Forecast:");

            $("#fiveDayForecast").prepend(forecastRowTitle);
            // Loop for 5 days Forecast
            for (var i = 0; i < 40; i++) {
                var daTe = data.list[i].dt_txt
                // Print daily forecast at Noon as hour selected by instructor
                if (daTe.includes("12:00:00")) {
                    // console.log(true);
                    // Print Weather cards to the DOM
                    var forecastCol = $('<div class="card bg-info" style="width: 15rem;"></div>');
                    forecastCol.addClass("col-md-" + data.list[i].dt_txt.length);
                    var forIcon = $('<img src="http://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png" class="card-img-top" alt="..."></img>')
                    var forecastP = $("<p>");
                    forecastP.text("Date: " + data.list[i].dt_txt);
                    var forecastTC = $('<p class="card-text">' + data.list[i].weather[0].main + '<br>' + 'Temperature: ' + data.list[i].main.temp + 'º avg.' + '<br>' + 'Wind Speed: ' + data.list[i].wind.speed + 'mph' + '</p>');
                    var forecastHum = $("<p>");
                    forecastHum.text("Humidity: " + data.list[i].main.humidity + '%');
                    forecastCol.append(forIcon, forecastP, forecastTC, forecastHum);
                    $("#fiveDayForecast").append(forecastCol);
                }
            }
        })
    }
// Search Button
    const searchElement = $("#search-button");
    searchElement.click(function () {
        InputUser = $("#search-value").val();
        ajaxCall();

    });

// List Button to compare
    $("#cityList").on("click", ".list", function () {
        InputUser = $(this).attr("id");
        console.log(InputUser);
        clear();
        ajaxCall();
    });
});