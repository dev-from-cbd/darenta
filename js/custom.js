$(function () {

	$('.menu__item').click(function(e){
		e.preventDefault();
		var current = $(this).parent('li');
		if (current.hasClass('open')){
			current.removeClass('open');
		} else{
			$(".menu li").removeClass('open');
			current.toggleClass('open');
		}
	});

	$('.btn-filter').click(function(e){
		e.preventDefault,
		$('.car__select').val(0)
	});

	map = map_init();
	range_slider_init();
});

function range_slider_init(){
$("#scale-slider")
    .slider({
        max: 40000,
        min: 0,
        values: [0, 40000],
        range: true,
    })
    .slider("pips", {
        rest: "label"
    })
    .on("slide slidechange", function( event, ui ) {
    	$('.slider__from').val(ui.values[0]);
    	$('.slider__to').val(ui.values[1]);
    });

}

function map_init(){
	var map;
	map = new google.maps.Map(document.getElementById('map'), {
		scrollwheel: false,
	    center: {lat: 55.75300, lng: 37.62130},
	    zoom: 8
	});

	var icon = '../images/marker.png';

	var marker = [];
	marker.push(new google.maps.Marker({
	    position: {lat: 55.75300, lng: 37.62130},
	    map: map,
	    title: 'Hello World!',
	    icon: icon,
	}));

	marker.push(new google.maps.Marker({
	    position: {lat: 55.53484823078213, lng: 38.73779296875},
	    map: map,
	    title: 'Hello World!',
	    icon: icon,
	}));

	marker.push(new google.maps.Marker({ 
	    position: {lat: 55.169456492110214, lng: 37.386474609375},
	    map: map,
	    title: 'Hello World!',
	    icon: icon,
	}));

	google.maps.event.addListener(map, 'click', function(event) {
		console.log(event.latLng.toString())
	    marker = new google.maps.Marker({position: event.latLng, map: map});

	});

	return map;
}