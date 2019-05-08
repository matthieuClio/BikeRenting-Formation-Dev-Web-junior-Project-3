"use strict";

// Class Data
//...
//...
//...

class Data {
    constructor() {
    }

    add_marker(coord, city_name, street_name, name_address, status_station, nb_avail_bikes) {

        this.coord = coord;
        this.city_name = city_name;
        this.street_name = street_name;
        this.name_address = name_address;
        this.status_station = status_station;
        this.nb_avail_bikes = nb_avail_bikes;

        var addressInfoElt = document.getElementById("address_st");
        var statusInfoElt = document.getElementById("status");
        var status_bikeInfoElt = document.getElementById("status_bike");
        var address_station = this.name_address;
        var status = this.status_station;
        var available_bikes = this.nb_avail_bikes;
        var form_field = document.getElementById("input_field");
        var text_information = document.getElementById("text_info");

        if(available_bikes == 0) {
            var markerCity = L.marker(this.coord, {icon: redIcon}).addTo(map);
        }
        else if(available_bikes > 0 && available_bikes < 4) {
            var markerCity = L.marker(this.coord, {icon: orangeIcon}).addTo(map);
        }
        else if(available_bikes > 3 && available_bikes < 6) {
            var markerCity = L.marker(this.coord, {icon: yellowIcon}).addTo(map);
        }
        else if(available_bikes > 4) {
            var markerCity = L.marker(this.coord, {icon: grayIcon}).addTo(map);
        }

        // Popup
        markerCity.bindPopup('<h3>' + 'Ville: ' + this.city_name + '<h3>' + 'Adresse: ' + this.name_address);

        // Show informations
        markerCity.on('click', function() {

            addressInfoElt.textContent = "Adresse: " + address_station;
            statusInfoElt.textContent = "Status: " + status;
            status_bikeInfoElt.textContent = "Vélo(s) disponible(s): " + available_bikes;

            form_field.style.display = "block";
            text_information.style.display = "none";
            
        });
    } // End add_marker

    marker_data() {
        
        // Key API
        var api_key = "ae736ed0d94957d43a63928cee44631af6036511";

        // Ajax request
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Creteil&apiKey=" + api_key,
            function (reponse) {

                var data = JSON.parse(reponse);
                var counter = 0;
                
                // Creating objects
                while(counter != data.length) {
                    var lat_lng = [data[counter].position.lat, data[counter].position.lng];
                    var city = data[counter].contract_name;
                    var name_address = data[counter].address;
                    var street = data[counter].name;
                    var status_station = data[counter].status;
                    var nb_avail_bikes = data[counter].available_bikes;
                    // Objet
                    marker.add_marker(lat_lng, city, street, name_address, status_station, nb_avail_bikes);
                    counter++;
                }

            } // End function Ajax
        );

    }// End marker_data


} // End Data class