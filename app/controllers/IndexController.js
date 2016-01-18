/**
 * Created by apium on 01/08/2015.
 */
define(function(require) {
    'use strict';

    function IndexController($scope) {
        this.data = $scope.data = {};
        this.event = $scope.event = {};

        this.event.onLoad = this.onLoad.bind(this);
    }

    IndexController.prototype.onLoad = function() {
        this.sliderLoaded();
    };

    IndexController.prototype.sliderLoaded = function() {
        jQuery(document).ready(function ($) {
            var options = { $AutoPlay: true };
            var jssor_slider1  = new $JssorSlider$('sliderHome', options);

            function ScaleSlider() {
                var parentWidth = $('#sliderHome').parent().width();
                if (parentWidth) {
                    jssor_slider1.$ScaleWidth(parentWidth);
                } else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
        });
    };

    return IndexController;
});