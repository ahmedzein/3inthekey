(function(w){
  function getChildrenHeights(elementName) {
    var newHeight = 0;
    $(elementName).children().each(function(index, element){
        newHeight = newHeight + element.offsetHeight;
    })
    return newHeight;
  }

  function hideSpotify(){
    $('.overlay').css('zIndex', '0');
    $('.spotify iframe').css('zIndex', '0');
  }

  $(document).ready(function () {
    $("#nav-trigger span").click(function () {

      if ($("nav#nav-mobile ul").hasClass("expanded")) {

        $("nav#nav-mobile ul").removeClass("expanded");
        $("nav#nav-mobile ul").css('height', '0px');
      } else {
        $("nav#nav-mobile ul").addClass("expanded")
        $("nav#nav-mobile ul").css('height', getChildrenHeights('nav#nav-mobile ul') + 'px');
      }
    });

    $('.overlay').on('click', hideSpotify);
    $('#overlayBtn').on('click', hideSpotify);

    $('#spotifyBtn').on('click', function (e){
      e.preventDefault();
      $('.overlay').css('zIndex', '2');
      $('.spotify iframe').css('zIndex', '3')
    })


    $('.overlay').css('height', window.innerHeight);
  });
}(window))


// Animated number counter

	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 80,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 300,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 2,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 4,duration: 2500});
$('#number5').jQuerySimpleCounter({end: 20,duration: 2500});
$('#number6').jQuerySimpleCounter({end: 13,duration: 2500});
$('#number7').jQuerySimpleCounter({end: 75,duration: 2500});
