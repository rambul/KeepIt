app.controller('flipbook', function($scope,sharedProperties) {

	var chosenPhotos = sharedProperties.getObject();
	var flipbook = $(".magazine");

	flipbook.addClass("template-1");

	chosenPhotos.each(function(){
		flipbook.append("<div>");
		flipbook.append($(this).find("img"));
	});


	flipbook.turn({
		width: "100%",
		height: "70%",
		autoCenter: true
	});

});