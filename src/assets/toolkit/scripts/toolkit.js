/**
 * Toolkit JavaScript
 */

'use strict';

//
// new Vivus('my-svg', {
//   duration: 200
//
// }, myCallback);
(function(){
var mainNav = function() {
	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	$('body').append('<div class="cn-button__overlay cn-button__overlay--closed"/>');
	function handler(){
	  if(!open){
			$(this).find('.cn-button__menu').hide();
	    $(this).find('.cn-button__menu--close').show();
	    $(wrapper).addClass('opened-nav');
			$('body').addClass('overlay-visible');
			$('.cn-button__overlay').removeClass('cn-button__overlay--closed');
	  }
	  else{
				$(this).find('.cn-button__menu').show();
		    $(this).find('.cn-button__menu--close').hide();
				$(wrapper).removeClass('opened-nav');
				$('body').removeClass('overlay-visible');
				$('.cn-button__overlay').addClass('cn-button__overlay--closed');
	  }
	  open = !open;
	}
	function closeWrapper(){
		$(wrapper).removeClass('opened-nav');
	}
}();

})();


$(function(){
  // var ilustrations = $('.jumbotron__animation');
  // var animations = [];
  // ilustrations.each(function(){
  //   console.log($(this).attr('id'));
  //   animations.push(new Vivus('', {
  //     duration: 200
  //   }));
  // });
  // console.log(animations);
  var duration = 100;
  if ($('#svgEmperors').length>0) {
    var svgEmperors = new Vivus('svgEmperors', {
      duration: duration
    }, hideSVG);
  }
  if ($('#svgForbiddencity').length>0) {
    var svgForbiddencity = new Vivus('svgForbiddencity', {
      duration: duration
    }, hideSVG);
  }
  if ($('#svgHistory').length>0) {
    var svgHistory = new Vivus('svgHistory', {
      duration: duration
    }, hideSVG);
  }
  if ($('#svgTraveltips').length>0) {
    var svgTraveltips = new Vivus('svgTraveltips', {
      duration: duration
    }, hideSVG);
  }
  if ($('#svgWhattosee').length>0) {
    var svgWhattosee = new Vivus('svgWhattosee', {
      duration: duration
    }, hideSVG);
  }
	function hideSVG(animation) {
		var jumbo = $(animation.parentEl).closest('.jumbotron');

		jumbo.find('.jumbotron__animation-wrapper').fadeOut(1000, "easeOutCubic", function() {
			jumbo.addClass('svg--fade');
			$('body').addClass('svg--faded');
		});

	}

})
