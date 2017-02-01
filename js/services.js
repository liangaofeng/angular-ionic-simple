angular.module('starter.services', [])
 .factory('DataService', ['$q', '$ionicLoading', "$log", "$http",
    function ($q, $ionicLoading, $log, $http) {
        var dataServiceUrl = "";
        var post = function (action, d) {
            $ionicLoading.show();
            d = ( d ? d : {});
            if (localStorage.userguid) {
                d.userguid = localStorage.userguid;
            }
            var deferred = $q.defer();
            $log.debug('-----------------请求信息开始-----------------');
            $http({
                method: 'POST',
                url: dataServiceUrl + '/' + action,
                headers: {'Content-Type': 'application/x-www-form-urlencoded',Authorization :  'BasicAuth ' +  localStorage.ticket||''},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: d
            }).then(function (json) {
                $ionicLoading.hide();
                deferred.resolve(json.data);
                $log.debug(action);
                $log.debug(d);
                $log.debug(json.data);
                $log.debug('-----------------请求信息结束-----------------');
            }, function (json) {
                $ionicLoading.hide();
                deferred.reject(json);
                $log.error(json);
                $log.debug('-----------------请求错误-----------------');
            });
            return deferred.promise;
        };
        return {
            post: post
        }
    }
]);