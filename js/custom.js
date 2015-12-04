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

		console.log(current.hasClass('open'))
	});

	var map;
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 8
	});
});
