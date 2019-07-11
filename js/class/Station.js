class Station {

	constructor(coord, city_name, street_name, name_address, status_station, nb_avail_bikes) {
		this.coord = coord;
		this.city_name = city_name;
		this.street_name = street_name;
		this.name_address = name_address;
		this.available_bikes = nb_avail_bikes;
		this.statusVelo = status_station;

        this.addressInfoElt = document.getElementById("address_st");
        this.statusInfoElt = document.getElementById("status");
        this.status_bikeInfoElt = document.getElementById("status_bike");
        this.form_field = document.getElementById("input_field");
        this.text_information = document.getElementById("text_info");
		this.address_station = this.name_address;  
	}

    add_marker() {

    	let addressInfoElt = this.addressInfoElt;
    	let statusInfoElt = this.statusInfoElt;
    	let status_bikeInfoElt = this.status_bikeInfoElt;
    	let form_field = this.form_field;
    	let text_information = this.text_information;
    	let address_station = this.name_address;
    	let available_bikes = this.available_bikes;
    	let statusVelo = this.statusVelo;

        if(this.available_bikes === 0) {
            var markerCity = L.marker(this.coord, {icon: redIcon}).addTo(map);
        }
        else if(this.available_bikes > 0 && this.available_bikes < 4) {
            var markerCity = L.marker(this.coord, {icon: orangeIcon}).addTo(map);
        }
        else if(this.available_bikes > 3 && this.available_bikes < 6) {
            var markerCity = L.marker(this.coord, {icon: yellowIcon}).addTo(map);
        }
        else if(this.available_bikes > 5) {
            var markerCity = L.marker(this.coord, {icon: grayIcon}).addTo(map);
        }

        // Popup
        markerCity.bindPopup('<h3>' + 'Ville: ' + this.city_name + '<h3>' + 'Adresse: ' + this.name_address);

        // Show informations
        markerCity.on('click', this.popup_marker.bind(this));
    } // End add_marker

    popup_marker() {
        this.addressInfoElt.textContent = "Adresse: " + this.address_station;
        this.statusInfoElt.textContent = "Status: " + this.statusVelo;
        this.status_bikeInfoElt.textContent = "Vélo(s) disponible(s): " + this.available_bikes;

        this.form_field.style.display = "block";
        this.text_information.style.display = "none";
    }

}