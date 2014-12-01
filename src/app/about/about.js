angular.module( 'ngBoilerplate.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'TableController',
        templateUrl: 'about/about.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'TableController', function TableController( $scope ) {
  // This is simple a demo for UI Boostrap.
 $scope.cells = contents();

  function contents(){
    console.log("BING");
    var num = [];
    for (var i = 1; i < 26 ; i++) {
    num.push(i);
    }
    console.log(num );
    return num;
  }

});

