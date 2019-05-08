"use strict";

// Slider object
//...
//...  
var slider = new Slider();  // js/class/Slider.js
slider.running();


// Map object
//...
//...
var mapObject = new Map();  // js/class/Map.js

// Map creation
var map = mapObject.addMap();

// Layer creation
mapObject.mapLayer();

// Custom Icons
var grayIcon = mapObject.mapIconsGray();
var yellowIcon = mapObject.mapIconsYellow();
var orangeIcon = mapObject.mapIconsOrange();
var redIcon = mapObject.mapIconsRed();

// Input zoom
mapObject.mapZoom();


// Data object
//...
//...
var marker = new Data(); // js/class/Data.js

// Ajax request
marker.marker_data();


// Booking object
//...
//...
var bookObject = new Book();  // js/class/Book.js

// Booking page refresh
bookObject.bookingPageRefresh();

// Input value page refresh
bookObject.inputPageRefresh();

// Booking button
bookObject.bookingButton();

// Delete button
bookObject.inputDeleteBooking();