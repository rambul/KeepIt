app.controller('flipbook', function($scope,sharedProperties) {

	var chosenPhotos = sharedProperties.getObject();
	var flipbook = $("#flipbook");

	var index = 0;

	chosenPhotos.each(function(){
		if(index == 0){
			flipbook.find(".bb-item:first").find(".bb-custom-side").append("<img src=\"" + $(this).find("img").attr("src") + "\">")
		}else{
			if(index%2 == 0){
				flipbook.find(".bb-bookblock").append("<div class=\"bb-item\"><div class=\"bb-custom-side\"><img src=\"" + $(this).find("img").attr("src") + "\"></div><div class=\"bb-custom-side\"></div></div>");
			}else{
				flipbook.find(".bb-custom-side:last").append("<img src=\"" + $(this).find("img").attr("src") + "\">");
			}
		}
		index++;
	});


	var Page = (function() {

	var config = {
		$bookBlock : $( '#bb-bookblock' ),
		$navNext : $( '#bb-nav-next' ),
		$navPrev : $( '#bb-nav-prev' ),
		$navFirst : $( '#bb-nav-first' ),
		$navLast : $( '#bb-nav-last' )
	  },
	  init = function() {
		config.$bookBlock.bookblock( {
		  speed : 1000,
		  shadowSides : 0.8,
		  shadowFlip : 0.4
		} );
		initEvents();
	  },
	  initEvents = function() {

		var $slides = config.$bookBlock.children();

		// add navigation events
		config.$navNext.on( 'click touchstart', function() {
		  config.$bookBlock.bookblock( 'next' );
		  return false;
		} );

		config.$navPrev.on( 'click touchstart', function() {
		  config.$bookBlock.bookblock( 'prev' );
		  return false;
		} );

		config.$navFirst.on( 'click touchstart', function() {
		  config.$bookBlock.bookblock( 'first' );
		  return false;
		} );

		config.$navLast.on( 'click touchstart', function() {
		  config.$bookBlock.bookblock( 'last' );
		  return false;
		} );

		// add swipe events
		$slides.on( {
		  'swipeleft' : function( event ) {
			config.$bookBlock.bookblock( 'next' );
			return false;
		  },
		  'swiperight' : function( event ) {
			config.$bookBlock.bookblock( 'prev' );
			return false;
		  }
		} );

		// add keyboard events
		$( document ).keydown( function(e) {
		  var keyCode = e.keyCode || e.which,
			arrow = {
			  left : 37,
			  up : 38,
			  right : 39,
			  down : 40
			};

		  switch (keyCode) {
			case arrow.left:
			  config.$bookBlock.bookblock( 'prev' );
			  break;
			case arrow.right:
			  config.$bookBlock.bookblock( 'next' );
			  break;
		  }
		} );
	  };

	  return { init : init };

	})();
	Page.init();

});