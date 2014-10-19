app.controller('flipbook', function($scope,sharedProperties) {

	var chosenPhotos = sharedProperties.getObject();
	var flipbook = $("#flipbook");

	flipbook.append("<div class=\"hard\"></div>");

	chosenPhotos.each(function(){
		flipbook.append("<div style=\"background-image:url("+$(this).find("img").attr("src")+"\"><img src=\""+$(this).find("img").attr("src")+"\"></div>");
	});


	flipbook.turn({
			width:'100%',
			height:600,
			elevation: 50,
			gradients: true,
			autoCenter: true
	});

});