app.controller('prepare', function($scope,sharedProperties) {
	var chosenPhotos = sharedProperties.getObject();

	$("#album-preview").addClass("template-1");
	
	chosenPhotos.each(function(){
		$("#album-preview").append("<li>");
		$("#album-preview li:last").append($(this).find("img"));
	});

});