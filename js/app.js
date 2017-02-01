angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .config(function ($stateProvider, $urlRouterProvider, $logProvider, $ionicConfigProvider) {
        $logProvider.debugEnabled(true);
        $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.tabs.style('standard');
        $ionicConfigProvider.views.forwardCache(true);
        $ionicConfigProvider.backButton.text('&emsp;&emsp;').icon('ion-chevron-left').previousTitleText(false);

        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/dash');

    });
