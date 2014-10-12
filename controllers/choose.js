app.controller('choose', function($scope,$http,sharedProperties) {

    $("body").off(); // REMOVE THIS!!

    // $http.get('test-json/albums.json')
    //    .then(function(res){
    //         $scope.albums = res.data;
    //         var albums = $scope.albums;

    //         for(i=0;i<albums.length;i++){

    //             var $theAlbum = $('<a href="#" class="list-group-item glyphicon glyphicon-chevron-right"><h3 class="list-group-item-heading">' + albums[i].name + '</h3><div class="list-group-item-text"></div></a>');
    //             $("#album-selection").find(".list-group").append($theAlbum);
    //             getAlbum(albums[i].url,$theAlbum);

    //         }
    //     });

    var fbCheck = setInterval("console.log(FB); if(FB) doFb();",100);

    doFb = function(){
        window.clearInterval(fbCheck);
        FB.Event.subscribe('auth.statusChange', function(resp) {
            getAlbums();
        });
    }

    getAlbums = function(){
        FB.api("/me/albums",function (response) {
              if (response && !response.error) {

                $scope.albums = response.data;
                var albums = $scope.albums;

                for(i=0;i<albums.length;i++){

                    var $theAlbum = $('<a href="#" class="list-group-item glyphicon glyphicon-chevron-right"><h3 class="list-group-item-heading">' + albums[i].name + '</h3><div class="list-group-item-text"></div></a>');

                    $("#the-albums").append($theAlbum);
                    getAlbum(albums[i].id,$theAlbum);

                }
                $(document.body).trigger("sticky_kit:recalc");
              }
            }
        );
    }


    function getAlbum(id,theAlbum){

        FB.api("/"+id+"/photos",function (response) {
              if (response && !response.error) {

                var numberOfPhotos;
                var photos = response.data;

                if(photos) numberOfPhotos = photos.length;

                var albumHtml = "<ul class=\"photos\">";

                for(i=0;i<numberOfPhotos;i++){
                    currentPhoto = photos[i];
                    albumHtml += '<li><div class="choice-indicator glyphicon glyphicon-ok-circle"></div><img src="' + currentPhoto.images[0].source + '" /><div class="view-full"><a class="view-full-link" target="_blank" href="' + currentPhoto.images[0].source + '"><i class="glyphicon glyphicon-share"></i> View Fullsize</a></div></li>';
                }

                albumHtml += "</ul>";

                theAlbum.find(".list-group-item-text").append('<div class="albumItems">' + albumHtml + '</div>');

                }
              }
        );

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

    $("body").on("click","#btn-random",function(e){
        e.preventDefault();
        var arr = []
        while(arr.length < 60){
          var randomnumber=Math.ceil(Math.random()*100)
          var found=false;
          for(var i=0;i<arr.length;i++){
            if(arr[i]==randomnumber){found=true;break}
          }
          if(!found)arr[arr.length]=randomnumber;
          $(".photos li").eq(randomnumber).trigger("click");
        }
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