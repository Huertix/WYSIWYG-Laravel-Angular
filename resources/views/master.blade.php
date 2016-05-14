<!DOCTYPE html>
<html ng-app="myApp" xmlns:javascript="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>RAUMBILD WYSIWYG</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
    <script>var baseUrl = "{{ url('/') }}/";</script>
</head>
<body>
    @include('header')
    @include('login-modal')

    <div class="main-container">
        <div id="nav-container">nav-container</div>
        <div id="editor-container">editor-container</div>
    </div>
    @include('footer')
    <script type="text/javascript" src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
</body>
</html>