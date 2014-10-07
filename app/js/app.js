"use strict";

angular.module("app", []).controller("ctrl", function($scope, $http){

  var socket = io();

  angular.extend($scope, {
    pathIMG: "/upload/image/"
  });

  $http.get('/arquivos').success(function(data, status, headers, config) {
    angular.extend($scope, {
      imagens: data.imagens,
      videos: data.videos
    });
  });

  socket.on('imagens', function(imagem){
    $scope.imagens.push(imagem);
    $scope.$apply();
  });

});