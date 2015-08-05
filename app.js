var main = function () {
	var origin = "",
	 	stations = [
	  {
	    "name": "12th St. Oakland City Center",
	    "abbr": "12TH",
	    "latitude": 37.803664,
	    "longitude": -122.271604,
	    "address": "1245 Broadway",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94612"
	  },
	  {
	    "name": "16th St. Mission",
	    "abbr": "16TH",
	    "latitude": 37.765062,
	    "longitude": -122.419694,
	    "address": "2000 Mission Street",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94110"
	  },
	  {
	    "name": "19th St. Oakland",
	    "abbr": "19TH",
	    "latitude": 37.80787,
	    "longitude": -122.269029,
	    "address": "1900 Broadway",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94612"
	  },
	  {
	    "name": "24th St. Mission",
	    "abbr": "24TH",
	    "latitude": 37.752254,
	    "longitude": -122.418466,
	    "address": "2800 Mission Street",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94110"
	  },
	  {
	    "name": "Ashby",
	    "abbr": "ASHB",
	    "latitude": 37.853024,
	    "longitude": -122.26978,
	    "address": "3100 Adeline Street",
	    "city": "Berkeley",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94703"
	  },
	  {
	    "name": "Balboa Park",
	    "abbr": "BALB",
	    "latitude": 37.72198087,
	    "longitude": -122.4474142,
	    "address": "401 Geneva Avenue",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94112"
	  },
	  {
	    "name": "Bay Fair",
	    "abbr": "BAYF",
	    "latitude": 37.697185,
	    "longitude": -122.126871,
	    "address": "15242 Hesperian Blvd.",
	    "city": "San Leandro",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94578"
	  },
	  {
	    "name": "Castro Valley",
	    "abbr": "CAST",
	    "latitude": 37.690754,
	    "longitude": -122.075567,
	    "address": "3301 Norbridge Dr.",
	    "city": "Castro Valley",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94546"
	  },
	  {
	    "name": "Civic Center/UN Plaza",
	    "abbr": "CIVC",
	    "latitude": 37.779528,
	    "longitude": -122.413756,
	    "address": "1150 Market Street",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94102"
	  },
	  {
	    "name": "Coliseum/Oakland Airport",
	    "abbr": "COLS",
	    "latitude": 37.754006,
	    "longitude": -122.197273,
	    "address": "7200 San Leandro St.",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94621"
	  },
	  {
	    "name": "Colma",
	    "abbr": "COLM",
	    "latitude": 37.684638,
	    "longitude": -122.466233,
	    "address": "365 D Street",
	    "city": "Colma",
	    "county": "sanmateo",
	    "state": "CA",
	    "zipcode": "94014"
	  },
	  {
	    "name": "Concord",
	    "abbr": "CONC",
	    "latitude": 37.973737,
	    "longitude": -122.029095,
	    "address": "1451 Oakland Avenue",
	    "city": "Concord",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94520"
	  },
	  {
	    "name": "Daly City",
	    "abbr": "DALY",
	    "latitude": 37.70612055,
	    "longitude": -122.4690807,
	    "address": "500 John Daly Blvd.",
	    "city": "Daly City",
	    "county": "sanmateo",
	    "state": "CA",
	    "zipcode": "94014"
	  },
	  {
	    "name": "Downtown Berkeley",
	    "abbr": "DBRK",
	    "latitude": 37.869867,
	    "longitude": -122.268045,
	    "address": "2160 Shattuck Avenue",
	    "city": "Berkeley",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94704"
	  },
	  {
	    "name": "Dublin/Pleasanton",
	    "abbr": "DUBL",
	    "latitude": 37.701695,
	    "longitude": -121.900367,
	    "address": "5801 Owens Dr.",
	    "city": "Pleasanton",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94588"
	  },
	  {
	    "name": "El Cerrito del Norte",
	    "abbr": "DELN",
	    "latitude": 37.925655,
	    "longitude": -122.317269,
	    "address": "6400 Cutting Blvd.",
	    "city": "El Cerrito",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94530"
	  },
	  {
	    "name": "El Cerrito Plaza",
	    "abbr": "PLZA",
	    "latitude": 37.9030588,
	    "longitude": -122.2992715,
	    "address": "6699 Fairmount Avenue",
	    "city": "El Cerrito",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94530"
	  },
	  {
	    "name": "Embarcadero",
	    "abbr": "EMBR",
	    "latitude": 37.792976,
	    "longitude": -122.396742,
	    "address": "298 Market Street",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94111"
	  },
	  {
	    "name": "Fremont",
	    "abbr": "FRMT",
	    "latitude": 37.557355,
	    "longitude": -121.9764,
	    "address": "2000 BART Way",
	    "city": "Fremont",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94536"
	  },
	  {
	    "name": "Fruitvale",
	    "abbr": "FTVL",
	    "latitude": 37.774963,
	    "longitude": -122.224274,
	    "address": "3401 East 12th Street",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94601"
	  },
	  {
	    "name": "Glen Park",
	    "abbr": "GLEN",
	    "latitude": 37.732921,
	    "longitude": -122.434092,
	    "address": "2901 Diamond Street",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94131"
	  },
	  {
	    "name": "Hayward",
	    "abbr": "HAYW",
	    "latitude": 37.670399,
	    "longitude": -122.087967,
	    "address": "699 'B' Street",
	    "city": "Hayward",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94541"
	  },
	  {
	    "name": "Lafayette",
	    "abbr": "LAFY",
	    "latitude": 37.893394,
	    "longitude": -122.123801,
	    "address": "3601 Deer Hill Road",
	    "city": "Lafayette",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94549"
	  },
	  {
	    "name": "Lake Merritt",
	    "abbr": "LAKE",
	    "latitude": 37.797484,
	    "longitude": -122.265609,
	    "address": "800 Madison Street",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94607"
	  },
	  {
	    "name": "MacArthur",
	    "abbr": "MCAR",
	    "latitude": 37.828415,
	    "longitude": -122.267227,
	    "address": "555 40th Street",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94609"
	  },
	  {
	    "name": "Millbrae",
	    "abbr": "MLBR",
	    "latitude": 37.599787,
	    "longitude": -122.38666,
	    "address": "200 North Rollins Road",
	    "city": "Millbrae",
	    "county": "sanmateo",
	    "state": "CA",
	    "zipcode": "94030"
	  },
	  {
	    "name": "Montgomery St.",
	    "abbr": "MONT",
	    "latitude": 37.789256,
	    "longitude": -122.401407,
	    "address": "598 Market Street",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94104"
	  },
	  {
	    "name": "North Berkeley",
	    "abbr": "NBRK",
	    "latitude": 37.87404,
	    "longitude": -122.283451,
	    "address": "1750 Sacramento Street",
	    "city": "Berkeley",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94702"
	  },
	  {
	    "name": "North Concord/Martinez",
	    "abbr": "NCON",
	    "latitude": 38.003275,
	    "longitude": -122.024597,
	    "address": "3700 Port Chicago Highway",
	    "city": "Concord",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94520"
	  },
	  {
	    "name": "Orinda",
	    "abbr": "ORIN",
	    "latitude": 37.87836087,
	    "longitude": -122.1837911,
	    "address": "11 Camino Pablo",
	    "city": "Orinda",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94563"
	  },
	  {
	    "name": "Pittsburg/Bay Point",
	    "abbr": "PITT",
	    "latitude": 38.018914,
	    "longitude": -121.945154,
	    "address": "1700 West Leland Road",
	    "city": "Pittsburg",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94565"
	  },
	  {
	    "name": "Pleasant Hill/Contra Costa Centre",
	    "abbr": "PHIL",
	    "latitude": 37.928403,
	    "longitude": -122.056013,
	    "address": "1365 Treat Blvd.",
	    "city": "Walnut Creek",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94597"
	  },
	  {
	    "name": "Powell St.",
	    "abbr": "POWL",
	    "latitude": 37.784991,
	    "longitude": -122.406857,
	    "address": "899 Market Street",
	    "city": "San Francisco",
	    "county": "sanfrancisco",
	    "state": "CA",
	    "zipcode": "94102"
	  },
	  {
	    "name": "Richmond",
	    "abbr": "RICH",
	    "latitude": 37.936887,
	    "longitude": -122.353165,
	    "address": "1700 Nevin Avenue",
	    "city": "Richmond",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94801"
	  },
	  {
	    "name": "Rockridge",
	    "abbr": "ROCK",
	    "latitude": 37.844601,
	    "longitude": -122.251793,
	    "address": "5660 College Avenue",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94618"
	  },
	  {
	    "name": "San Bruno",
	    "abbr": "SBRN",
	    "latitude": 37.637753,
	    "longitude": -122.416038,
	    "address": "1151 Huntington Avenue",
	    "city": "San Bruno",
	    "county": "sanmateo",
	    "state": "CA",
	    "zipcode": "94066"
	  },
	  {
	    "name": "San Francisco Int'l Airport",
	    "abbr": "SFIA",
	    "latitude": 37.616035,
	    "longitude": -122.392612,
	    "address": "International Terminal, Level 3",
	    "city": "San Francisco Int'l Airport",
	    "county": "sanmateo",
	    "state": "CA",
	    "zipcode": "94128"
	  },
	  {
	    "name": "San Leandro",
	    "abbr": "SANL",
	    "latitude": 37.72261921,
	    "longitude": -122.1613112,
	    "address": "1401 San Leandro Blvd.",
	    "city": "San Leandro",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94577"
	  },
	  {
	    "name": "South Hayward",
	    "abbr": "SHAY",
	    "latitude": 37.63479954,
	    "longitude": -122.0575506,
	    "address": "28601 Dixon Street",
	    "city": "Hayward",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94544"
	  },
	  {
	    "name": "South San Francisco",
	    "abbr": "SSAN",
	    "latitude": 37.664174,
	    "longitude": -122.444116,
	    "address": "1333 Mission Road",
	    "city": "South San Francisco",
	    "county": "sanmateo",
	    "state": "CA",
	    "zipcode": "94080"
	  },
	  {
	    "name": "Union City",
	    "abbr": "UCTY",
	    "latitude": 37.591208,
	    "longitude": -122.017867,
	    "address": "10 Union Square",
	    "city": "Union City",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94587"
	  },
	  {
	    "name": "Walnut Creek",
	    "abbr": "WCRK",
	    "latitude": 37.905628,
	    "longitude": -122.067423,
	    "address": "200 Ygnacio Valley Road",
	    "city": "Walnut Creek",
	    "county": "contracosta",
	    "state": "CA",
	    "zipcode": "94596"
	  },
	  {
	    "name": "West Dublin/Pleasanton",
	    "abbr": "WDUB",
	    "latitude": 37.699759,
	    "longitude": -121.928099,
	    "address": "6501 Golden Gate Drive",
	    "city": "Dublin",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94568"
	  },
	  {
	    "name": "West Oakland",
	    "abbr": "WOAK",
	    "latitude": 37.80467476,
	    "longitude": -122.2945822,
	    "address": "1451 7th Street",
	    "city": "Oakland",
	    "county": "alameda",
	    "state": "CA",
	    "zipcode": "94607"
	  }];

	//Grabs location
	if (navigator.geolocation) {
	//Passes location into the following function
	   navigator.geolocation.getCurrentPosition(comparePosition);
	} else { 
	   $('.trains').text = "Geolocation is not supported by this browser.";
	}

	//Finds closest Station 
	function comparePosition(position) {
		var closest = 9999;
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		console.log(latitude);
		console.log(longitude);

		//Loops through stations, compares user coordinates to stations'
		for (var i = 0; i < stations.length; i++){
			var distance = getDistance(latitude,longitude,stations[i]["latitude"],stations[i]["longitude"]);
			if (distance < closest) {
				closest = distance;
				origin = stations[i]["abbr"];
			}
		}
		console.log(origin);
		//origin = "POWL";
		getTrains();
	};

	//Provides new method for getDistance function
	Number.prototype.toRad = function() {
	    return this * Math.PI / 180;
	};

	//Calculates distance between user's coordinates and station
	function getDistance(latUser, lonUser, latStation, lonStation) {
	  var R = 6371;
	  var dLat = (latStation - latUser).toRad();
	  var dLon = (lonStation - lonUser).toRad();
	  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	          Math.cos(latStation.toRad()) * Math.cos(latUser.toRad()) *
	          Math.sin(dLon / 2) * Math.sin(dLon / 2);
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  var d = R * c;
	  return d;
	};

	//Parse stations, showing nearby times and trains.
	function getTrains(){  
	$.ajax({ 
		type:'GET', 
		url:'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=' + origin + '&key=Q6L4-U5HX-IQQQ-DT35', 
		dataType:'xml', 
		success: function(xml){ 
			console.log(origin);
			$(xml).find('station').each(function(){
				var name = $(this).find('name').text();
				$('<ul></ul>').text(name).appendTo('.station');
				$(xml).find('etd').each(function(){
					var abbr = $(this).find('abbreviation').text();
					var destination = $(this).find('destination').text();
					$("<div class='row "+ abbr +"'><h2></h2></div>").html(destination).appendTo('#station-label');
					$(this).find('estimate').each(function(){
						var minutes = $(this).find('minutes').text();
						var length = $(this).find('length').text();
						var color = $(this).find('hexcolor').text();
						if (minutes === "Leaving") {
							$('<h5></h5>').text(minutes).appendTo('.'+abbr);	
						}
						else if (minutes === "Arriving") {
							$('<h5></h5>').text(minutes+"   "+length+" cars").appendTo('.'+abbr);	
						}
						else {
							$('<h5></h5>').text(minutes+"m   " +length+" cars").appendTo('.'+abbr);	
						}
						
					});
				})
			})
		}
	});
	};


	$('button-primary').click(function(){
		reload();
	})
};

$(document).ready(main);


