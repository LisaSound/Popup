var menuApp = angular.module('menu', []);

menuApp.controller('menuCtl', function menuCtl($scope) {
  // drinks data
  $scope.drinks = [
    {
      name: "White Russian",
      ingredients: "Vodka, coffee liqueur, cream",
      price: 30,
      imageHref: "../src/images/whiteRussian.jpg"
    },
    {
      name: "Bloody Mary",
      ingredients: "Vodka, tomato juice, salt, chili",
      price: 35,
      imageHref: "../src/images/bloodyMary.jpg"
    }
  ]

  $scope.clickDrink = function(drink) {
    // create a popup instance
    var detailPopup = new smq.Popup({
      title: drink.name,
      innerHtml: '<img id="cocktail-img" src=' + drink.imageHref + '><hr><button id="cocktail-cancel" ng-click="closePop()">cancel</button>'
    });
    detailPopup.show();
    // bind close() to the cancel button
    var detailPopupCancel = document.getElementById("cocktail-cancel");
    detailPopupCancel.addEventListener("click", function(){
      detailPopup.close();
    }, false);
  }
});

