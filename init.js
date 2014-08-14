	$(document).ready(function(){

		var albums;

		$.getJSON("test-json/albums.json",function(data) {}).done(function(d) {
			albums = d;
			for(i=0;i<albums.length;i++){

				var $theAlbum = $('<a href="#" class="list-group-item glyphicon glyphicon-chevron-right"><h4 class="list-group-item-heading">' + albums[i].name + '</h4><div class="list-group-item-text"></div></a>');
				$("#album-selection").find(".list-group").append($theAlbum);
				getAlbum(albums[i].url,$theAlbum);
			}
		});

		function getAlbum(url,theAlbum){
			$.getJSON(url, function(data) {
			  }).done(function(d) {

			  	var numberOfPhotos;

			  	album = d;

			    var albumLink = album.link;
			    var albumName  = album.name;
			    var photos = album.photos;

			    numberOfPhotos = photos.length;

			    var albumHtml = "<ul class=\"photos\">";

			    for(i=0;i<numberOfPhotos;i++){
			    	currentPhoto = photos[i];
			    	albumHtml += '<li><div class="choice-indicator glyphicon glyphicon-ok-circle"></div><img src="' + currentPhoto.images[0].source + '" /><div class="view-full"><a class="view-full-link" target="_blank" href="' + currentPhoto.images[0].source + '"><i class="glyphicon glyphicon-share"></i> View Fullsize</a></div></li>';
			    }

			    albumHtml += "</ul>";

			    theAlbum.find(".list-group-item-text").append('<div class="albumItems">' + albumHtml + '</div>')

			});
		}

		$("body").on("click",".list-group-item",function(){
	    	$(this).toggleClass("open").find(".albumItems").toggle("fast");
	    });

		$("body").on("click",".photos li",function(){
	    	$(this).toggleClass("chosen");
	    });

	    $("body").on("click",".photos,.view-full",function(e){
	    	e.stopPropagation();
	    });

	});