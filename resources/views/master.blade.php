<!DOCTYPE html>
<html ng-app="myApp" xmlns:javascript="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>RAUMBILD WYSIWYG</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/font-awesome/css/font-awesome.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/textAngular/dist/textAngular.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/app.css') }}">
    <script>var baseUrl = "{{ url('/') }}/";</script>
</head>
<body>
    @include('header')
    @include('login-modal')

    <div class="main-container"  ng-controller="myController">
        <div ng-view></div>
    </div>

    @include('footer')

    <script type="text/javascript" src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/textAngular/dist/textAngular-rangy.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/textAngular/dist/textAngular-sanitize.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/textAngular/dist/textAngular.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/controllers.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/models.js') }}"></script>
</body>
</html>