"use strict";

// Class Map
//...
//...
//...

class Map {


	constructor() {

		// Coordinate
		this.coord_creteil = [48.785978155614686, 2.4594506630437536];
		this.grayIcon;
		this.yellowIcon;
		this.orangeIcon;
		this.redIcon;;
		this.zoomInputElt = document.getElementById("input_zoom");
		this.zoom = false;
		this.api_key = "ae736ed0d94957d43a63928cee44631af6036511";
		this.stationObject;
	}

	addMap() {
		// Map creation
		let map = L.map('map', {dragging: !L.Browser.mobile}).setView(this.coord_creteil, 14);

		return map;
	}

	mapLayer() {
		// Layer creation
		L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
			maxZoom: 20
		}).addTo(map);
	}

	mapIconsGray() {
		// Custom Icons
		this.grayIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return this.grayIcon;
	} // End mapIconsGreen


	mapIconsYellow() {
		// Custom Icons
		this.yellowIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone_middle.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return this.yellowIcon;
	} // End mapIconsOrange


	mapIconsOrange() {
		// Custom Icons
		this.orangeIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone_low.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return this.orangeIcon;
	} // End mapIconsOrange


	mapIconsRed() {
		// Custom Icons
		this.redIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone_none.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return this.redIcon;
	} // End mapIconsRed


	mapZoom() {
		// Base state of zoom and drag
		map.scrollWheelZoom.disable();

		// Dragging for mobile
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
			map.dragging.disable();
		}

		// Dragging for tablet
		if ((screen.width  >= 768) && (screen.width <= 1279)) {
			map.dragging.disable();
		}
		
		this.zoomInputElt.addEventListener("click", () =>{
		    if(!this.zoom) {
		        map.scrollWheelZoom.enable();
		        this.zoom = true;
		    }

		    else if(this.zoom) {
		        map.scrollWheelZoom.disable();
		        this.zoom = false;
		    }
		});

	} // End mapZoom

	marker_data() {

        // Ajax request
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Creteil&apiKey=" + this.api_key,
            function (reponse) {

                let data = JSON.parse(reponse);
                let counter = 0;
                
                // Creating objects
                while(counter != data.length) {

                    let lat_lng = [data[counter].position.lat, data[counter].position.lng];
                    let city = data[counter].contract_name;
                    let name_address = data[counter].address;
                    let street = data[counter].name;
                    let status_station = data[counter].status;
                    let nb_avail_bikes = data[counter].available_bikes;
                    // Objet
                    let stationObject = new Station(lat_lng, city, street, name_address, status_station, nb_avail_bikes);
                    stationObject.add_marker(lat_lng, city, street, name_address, status_station, nb_avail_bikes);
                    counter++;
                }

            } // End function
        ); // AjaxGet
        
    } // End marker_data

} // End class Map