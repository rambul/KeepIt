<html>
<head>
	<title>KeepIt - Hard-copy your best facebook moments!</title>
	<link rel="stylesheet" type="text/css" href="keepit.css">
	<script src="lib/jquery.min.js"></script>

	<!-- start bootstrap -->

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="css/simplex.css">

	<!-- Latest compiled and minified JavaScript -->
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

  <script>
      // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the currenvt login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
      }
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }

    window.fbAsyncInit = function() {
    FB.init({
      appId      : '710682215635251',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.0' // use version 2.0
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
      });
    }
  </script>


  <script src="init.js"></script>
</head>
<body>
<header class="navbar navbar-default navbar-fixed-top">

	<img src="logo-small.png" class="logo">
  	<div class="container">
        <div class="navbar-header">
          <a href="../" class="navbar-brand">Bootswatch</a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Themes <span class="caret"></span></a>
              <ul class="dropdown-menu" aria-labelledby="themes">
                <li><a href="../default/">Default</a></li>
                <li class="divider"></li>
                <li><a href="../amelia/">Amelia</a></li>
                <li><a href="../cerulean/">Cerulean</a></li>
                <li><a href="../cosmo/">Cosmo</a></li>
                <li><a href="../cyborg/">Cyborg</a></li>
                <li><a href="../darkly/">Darkly</a></li>
                <li><a href="../flatly/">Flatly</a></li>
                <li><a href="../journal/">Journal</a></li>
                <li><a href="../lumen/">Lumen</a></li>
                <li><a href="../readable/">Readable</a></li>
                <li><a href="../simplex/">Simplex</a></li>
                <li><a href="../slate/">Slate</a></li>
                <li><a href="../spacelab/">Spacelab</a></li>
                <li><a href="../superhero/">Superhero</a></li>
                <li><a href="../united/">United</a></li>
                <li><a href="../yeti/">Yeti</a></li>
              </ul>
            </li>
            <li>
              <a href="../help/">Help</a>
            </li>
            <li>
              <a href="http://news.bootswatch.com">Blog</a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="download">Download <span class="caret"></span></a>
              <ul class="dropdown-menu" aria-labelledby="download">
                <li><a href="./bootstrap.min.css">bootstrap.min.css</a></li>
                <li><a href="./bootstrap.css">bootstrap.css</a></li>
                <li class="divider"></li>
                <li><a href="./variables.less">variables.less</a></li>
                <li><a href="./bootswatch.less">bootswatch.less</a></li>
              </ul>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <div class="fb-btn">
              <fb:login-button scope="public_profile,email,user_likes,user_photos" onlogin="checkLoginState();">
              </fb:login-button>
            </div>
          </ul>

        </div>
  	</div>
</header>

<div class="container">
<div class="page-header" id="banner">
  <div class="row">
    <div class="col-lg-8 col-md-7 col-sm-6">
        <h1>Your Albums</h1>
        <p class="lead">Choose the ones you want to print</p>
      </div>
      <div class="col-lg-4 col-md-5 col-sm-6"></div>
  </div>
</div>
  <section id="album-selection">
  </section>
</div>


<footer>
  <a href="privacy-policy.html" target="_blank">Privacy Policy</a>
</footer>
</body>
</html>