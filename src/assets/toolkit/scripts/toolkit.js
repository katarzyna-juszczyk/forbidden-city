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

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    $(wrapper).addClass('opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		$(wrapper).removeClass('opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		$(wrapper).removeClass('opened-nav');
	}

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
    });
  }
  if ($('#svgForbiddencity').length>0) {
    var svgForbiddencity = new Vivus('svgForbiddencity', {
      duration: duration
    });
  }
  if ($('#svgHistory').length>0) {
    var svgHistory = new Vivus('svgHistory', {
      duration: duration
    });
  }
  if ($('#svgTraveltips').length>0) {
    var svgTraveltips = new Vivus('svgTraveltips', {
      duration: duration
    });
  }
  if ($('#svgWhattosee').length>0) {
    var svgWhattosee = new Vivus('svgWhattosee', {
      duration: duration
    });
  }


})
