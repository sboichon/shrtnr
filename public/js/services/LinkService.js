// public/js/services/LinkService.js
angular.module('LinkService', []).factory('Link', ['$http', function($http) {

    return {
        // call to get all links
        get : function() {
            return $http.get('/api/links');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new link
        create : function(linkData) {
            return $http.post('/api/links', linkData);
        },

        // call to DELETE a link
        delete : function(id) {
            return $http.delete('/api/links/' + id);
        }
    }

}]);
