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

    FB.Event.subscribe('auth.login', function(response) {
        // {
        //   status: "",         /* Current status of the session */
        //   authResponse: {          /* Information about the current session */
        //      userID: ""          /* String representing the current user's ID */
        //      signedRequest: "",  /* String with the current signedRequest */
        //      expiresIn: "",      /* UNIX time when the session expires */
        //      accessToken: "",    /* Access token of the user */
        //   }
        // }
        // alert('event status: ' + response.status);
    });

    FB.getLoginStatus(function(response) {
        //  {
        //     status: 'connected',
        //     authResponse: {
        //        accessToken: '...',
        //        expiresIn:'...',
        //        signedRequest:'...',
        //        userID:'...'
        //     }
        //  }
        //alert('getLoginStatus: ' + response.status);

        if (response.status=='connected') {
            FB.api('/me',function(response){
                $("#start").find(".btn-facebook").fadeOut("fast").after('<p>You\'re already logged in. <a href="choose/">Proceed</a></p>');
            });
        }
    });

};
function fb_login(){
    FB.login(function(response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            //console.log(response); // dump complete info
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me', function(response) {
                user_email = response.email; //get user email
          // you can store this data into your database
            });

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {
        scope: 'publish_stream,email'
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