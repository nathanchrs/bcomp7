$(document).ready(function() {
	function initialize() {
		var map_canvas = document.getElementById('map_canvas');
    	var map_options = {
	      center: new google.maps.LatLng(-6.235463,106.626605),
	      zoom: 16,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    var map = new google.maps.Map(map_canvas, map_options);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});