$(document).ready(function(){
	$('.works__slider').slick({
		infinite: true,
		 slidesToShow: 1,
        slidesToScroll: 1,
		arrows: true,
		prevArrow: '<li class="box__arrow box__arrow--left "></li>' ,
        nextArrow: '<li class="box__arrow box__arrow--right "></li>' ,
        dots: true,
        autoplay: false,

	});

	$('.ourTeam__slider').slick({
		infinite: true,
		 slidesToShow: 3,
        slidesToScroll: 1,
		arrows: true,
		prevArrow: '<li class="ourTeam__arrow ourTeam__arrow--left "></li>' ,
        nextArrow: '<li class="ourTeam__arrow ourTeam__arrow--right "></li>' ,
        dots: false,
        autoplay: false,
         responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }]
	});
    

        // landing__scroll
$('.scroll a[href^="#"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
        // $('html, body').animate({ scrollBottom: $(scroll_el).offset().bottom }, 800);
    }
    return false;
});
});
   // map
function initMap() {
    var image = '../img/pin.svg';
	    var coordinates = {lat:  -7.941428, lng: 112.622276},

	      map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
             zoom:14,
            disableDefaultUI:true,
            styles:[{"featureType": "administrative.country","elementType": "labels.text","stylers": [{"weight": 1}]},{"featureType": "road.arterial","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "road.highway","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "road.local","stylers": [{"visibility": "off"}]}]

        }),
	          marker = new google.maps.Marker({
            position:  {lat: -7.937006, lng: 112.627681},
            map: map,
            animation: google.maps.Animation.DROP,
            icon:image
            
        });

    }
