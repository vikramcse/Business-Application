/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        // productResource is the factory service and has query method
        // of the resource object
        productResource.query(function(data) {
            // will send get request to server and returns json array
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }
    }
}());
