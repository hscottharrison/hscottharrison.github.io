angular.module('portfolio', ['ui.router', 'ui.materialize', 'angularTypewrite'])

.config(function ($stateProvider, $urlRouterProvider) {
    /* Set home route */
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html'
      })

      .state('about', {
        url: '/about',
        templateUrl: './views/about.html'
      })

      .state('work', {
        url: '/work',
        templateUrl: './views/work.html'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: './views/contact.html'
      })
});
