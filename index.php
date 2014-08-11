<html>
<head>
	<title>KeepIt - Hard-copy your best facebook moments!</title>
	<link rel="stylesheet" type="text/css" href="keepit.css">
	<script src="lib/jquery.min.js" type="text/javascript" language="javascript"></script>

	<!-- start bootstrap -->

	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="css/simplex.css">

	<!-- Latest compiled and minified JavaScript -->
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

	<script type="text/javascript" language="javascript">
	$(document).ready(function(){

		$.getJSON("test-json/album.json", function(data) {
		  }).done(function(d) {

		  	var numberOfPhotos;

		  	album = d;

		    var albumLink = album.link;
		    var albumName  = album.name;
		    var photos = album.photos;

		    numberOfPhotos = photos.length;

		    $("#album-selection").append("<a href="+albumLink+" target=\"_blank\">" + albumName + "</a>");

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
	</script>
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
            <li><a href="http://builtwithbootstrap.com/" target="_blank">Built With Bootstrap</a></li>
            <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank">WrapBootstrap</a></li>
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