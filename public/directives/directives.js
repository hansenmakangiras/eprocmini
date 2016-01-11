/**
 * Created by hanse on 1/8/2016.
 */
'use strict';

/* Directives */

angular.module('myApp.directives', []).
    directive('appVersion', function (version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    });
