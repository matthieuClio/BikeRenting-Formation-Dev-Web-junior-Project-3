"use strict";

// Class Map
//...
//...
//...

class Map {
	constructor() {
	}

	addMap() {
		// Coordinate
		var coord_creteil = [48.785978155614686, 2.4594506630437536];

		// Map creation
		var map = L.map('map', {dragging: !L.Browser.mobile}).setView(coord_creteil, 14);

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
		var grayIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return grayIcon;
	} // End mapIconsGreen


	mapIconsYellow() {
		// Custom Icons
		var yellowIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone_middle.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return yellowIcon;
	} // End mapIconsOrange


	mapIconsOrange() {
		// Custom Icons
		var orangeIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone_low.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return orangeIcon;
	} // End mapIconsOrange


	mapIconsRed() {
		// Custom Icons
		var redIcon = L.icon({
		    iconUrl: 'images/icon_map/bike_icone_none.png',
		    shadowUrl: 'images/icon_map/leaf-shadow.png',

		    iconSize:     [61, 93], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [30, 93], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 62],  // the same for the shadow
		    popupAnchor:  [2, -90] // point from which the popup should open relative to the iconAnchor
		});

		return redIcon;
	} // End mapIconsRed


	mapZoom() {
		//variable
		var zoomInputElt = document.getElementById("input_zoom");
		var zoom = false;

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
		
		zoomInputElt.onclick = function() {
		    if(!zoom) {
		        map.scrollWheelZoom.enable();
		        zoom = true;
		    }

		    else if(zoom) {
		        map.scrollWheelZoom.disable();
		        zoom = false;
		    }
		}

	} // End mapZoom

} // End class Map