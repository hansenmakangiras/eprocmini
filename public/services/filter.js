/**
 * Created by hanse on 1/8/2016.
 */
'use strict';

/* Filters */

angular.module('myApp.filters', []).
    filter('interpolate', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    });
