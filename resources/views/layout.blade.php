<!DOCTYPE html>
<html ng-app="app">
<head>
    <title>AngularJS com Laravel</title>
    {!! HTML::style('assets/css/styles.css') !!}
    {!! HTML::style('assets/css/semantic/semantic.min.css') !!}
</head>
<body>
    <div class="ui secondary pointing menu">
      <a href="/#/" class="item active">Início</a>
      <a href="#/cadastro" class="item">Cadastrar Cliente</a>
    </div>

    <div class="ui segment">
       <div class="ten wide column">
            <div class="main-container" ng-view></div>
       </div>
    </div>

    {!! HTML::script('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js') !!}
    {!! HTML::script('assets/js/angular/angular.min.js') !!}
    {!! HTML::script('assets/js/angular/angular-route.js') !!}
    {!! HTML::script('assets/js/semantic/semantic.min.js') !!}
    {!! HTML::script('angular/app/app.js') !!}
    <script>
    angular.module("app").constant("CSRF_TOKEN","<?php echo csrf_token() ?>");
    </script>

    {!! HTML::script('angular/services/users/users.js') !!}
    {!! HTML::script('angular/controllers/UsersController.js') !!}

</body>
</html>