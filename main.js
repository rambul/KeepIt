$(document).ready(function(){

});

$.fn.anim = function(x) {
	this.removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  		$(this).removeClass();
	});
};