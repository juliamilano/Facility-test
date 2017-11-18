$(function() {

$(document).ready(function(){
        $(".owl-carousel.block-one-slider").owlCarousel();
         $(".owl-carousel.block-mini-second-slider").owlCarousel();
});

    $('.owl-carousel.block-one-slider').owlCarousel({
        loop:true,
        nav:true,
        merge:true,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            }
        }
    })

    $('.owl-carousel.block-mini-second-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });
    
});


function initMap() {
   let centerLatLng = new google.maps.LatLng(50.443418, 30.525518);
   let mapOptions = {
        center: centerLatLng, 
        zoom: 10               
    };
   let map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
google.maps.event.addDomListener(window, "load", initMap);
