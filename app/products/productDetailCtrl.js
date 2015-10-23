(function() {
	"use strict";

	angular
		.module("productManagement")
		.controller("productDetailCtrl", ["product", "productService", productDetailCtrl]);

		// the product is injected by reslove in productDetail state in router
		function productDetailCtrl(product, productService) {
			var vm = this;

			vm.product = product;
			vm.title = "Product Detail: " + vm.product.productName;

			if(vm.product.tags) {
				vm.product.tagList = vm.product.tags.toString();
			}

			vm.marginPercent = productService.calculateMarginPercentage(vm.product.price, vm.product.cost);

		};

}());