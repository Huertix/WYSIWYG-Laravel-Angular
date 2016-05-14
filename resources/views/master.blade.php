<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <meta charset="UTF-8">
  <title>RAUMBILD WYSIWYG</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
  <script>var baseUrl = "{{ url('/') }}/";</script>
</head>
<body>
<nav>nav</nav>
<div class="main-container">
  <div id="nav-container">nav-container</div>
  <div id="editor-container">editor-container</div>
</div>
<footer></footer>
<script type="text/javascript" src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
</body>
</html>