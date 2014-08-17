var app = angular.module('keepIt', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
        when('/keepit/', {
            templateUrl: '/keepit/templates/choose.html',
            controller: 'choose'
        }).
        when('/keepit/prepare', {
            templateUrl: '/keepit/templates/prepare.html',
            controller: 'prepare'
        }).
        otherwise({
            redirectTo: '/keepit/'
        });
    }
]);

app.service('sharedProperties', function() {
    var selectedAlbums = {};

    return {
        getString: function() {
            return stringValue;
        },
        setString: function(value) {
            stringValue = value;
        },
        setObject: function(value) {
            selectedAlbums = value;
        },
        getObject: function() {
            return selectedAlbums;
        }
    }
});

app.controller('choose', function($scope,sharedProperties) {

    $("body").off(); // REMOVE THIS!!

    var albums;

    $.getJSON("test-json/albums.json",function(data) {}).done(function(d) {
        albums = d;
        for(i=0;i<albums.length;i++){

            var $theAlbum = $('<a href="#" class="list-group-item glyphicon glyphicon-chevron-right"><h3 class="list-group-item-heading">' + albums[i].name + '</h3><div class="list-group-item-text"></div></a>');
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
        $(this).toggleClass("open").find(".albumItems").toggle("fast",function(){
                $(document.body).trigger("sticky_kit:recalc");
        });
    });

    $("body").on("click",".photos li",function(e){
        e.preventDefault();
        $(this).toggleClass("chosen");
        $("#selected-num h2").text($(".photos li.chosen").length);
        $("#selected-num h2").anim("fadeInDown");

        sharedProperties.setObject($(".photos li.chosen"));
    });

    $("body").on("click",".photos,.view-full",function(e){
        e.stopPropagation();
    });

    $("#albums-title").stick_in_parent({
        parent: ".body-container", sticky_class: "stick-body", offset_top: 70
    })
    .on("sticky_kit:stick", function(e) {
        $(".body-container").addClass("has-sticky");
    })
    .on("sticky_kit:unstick", function(e) {
        $(".body-container").removeClass("has-sticky");
    });
});



app.controller('prepare', function($scope,sharedProperties) {
    $("#album-preview").append(sharedProperties.getObject());
});