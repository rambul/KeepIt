window.fbAsyncInit = function() {
    FB.init({
        appId: '710682215635251',
        status: true,
        cookie: true,
        xfbml: true,
        oauth: true
    })

    FB.Event.subscribe('auth.login', function(resp) {
        window.location = "/choose";
    });

    FB.Event.subscribe("auth.logout", function() {
        window.location = '/'
    });

    FB.getLoginStatus(function(response) {

        if (response.status=='connected') {
            FB.api('/me',function(response){
                $("#start").find(".btn-facebook").fadeOut("fast").after('<p>You\'re already logged in. <a id="proceed" href="choose/">Proceed</a></p>');
                if(window.location.pathname == "/"){
                    window.location = "/choose";
                }
            });
        }
    });

};
function fb_login(){
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me', function(response) {
                user_email = response.email; 
                $(".fb-btn").after('<div class="user_email">'+ user_email +'</div>');
            });

            FB.api(
            "/me/photos",
            "POST",
            {
                "source": "{image-data}"
            },
            function (response) {
                  if (response && !response.error) {
                    console.log(response);
                  }
                }
            );

        } else {
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'publish_stream,email,user_photos'
    });
}
(function(d) {
    var js, id = 'facebook-jssdk';
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
}(document));