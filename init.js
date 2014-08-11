	$(document).ready(function(){

		$.getJSON("test-json/album.json", function(data) {
		  }).done(function(d) {

		  	var numberOfPhotos;

		  	album = d;

		    var albumLink = album.link;
		    var albumName  = album.name;
		    var photos = album.photos;

		    numberOfPhotos = photos.length;

		    $("#album-selection").append("<h2>" + albumName + "</h2><a href="+albumLink+" target=\"_blank\">View Album</a><br/><br/>");

		    var albumHtml = "<ul class=\"photos\">";

		    for(i=0;i<numberOfPhotos;i++){
		    	currentPhoto = photos[i];
		    	console.log(currentPhoto);
		    	albumHtml += "<li><img src=\"" + currentPhoto.picture + "\" /><br/><a target=\"_blank\" href=\"" + currentPhoto.images[0].source + "\">View Full Size</a><br/></li>";
		    }

		    albumHtml += "</ul>";

		    console.log(albumHtml);

		    $("#album-selection").append(albumHtml);

		});
	});