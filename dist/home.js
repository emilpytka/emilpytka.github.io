System.register(['aurelia-framework', './postsRepo'], function (_export) {
	'use strict';

	var inject, PostsRepo, Home, StringToBoolValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_postsRepo) {
			PostsRepo = _postsRepo.PostsRepo;
		}],
		execute: function () {
			Home = (function () {
				function Home(postsRepo) {
					_classCallCheck(this, _Home);

					this.posts = [];

					this.postsRepo = postsRepo;
				}

				var _Home = Home;

				_createClass(_Home, [{
					key: 'activate',
					value: function activate() {
						this.posts = this.postsRepo.getItems();
					}
				}]);

				Home = inject(PostsRepo)(Home) || Home;
				return Home;
			})();

			_export('Home', Home);

			StringToBoolValueConverter = (function () {
				function StringToBoolValueConverter() {
					_classCallCheck(this, StringToBoolValueConverter);
				}

				_createClass(StringToBoolValueConverter, [{
					key: 'toView',
					value: function toView(value) {
						return (value || '').toUpper();
					}
				}]);

				return StringToBoolValueConverter;
			})();

			_export('StringToBoolValueConverter', StringToBoolValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dCQUlhLElBQUksRUFjSiwwQkFBMEI7Ozs7Ozs7OzhCQWxCL0IsTUFBTTs7MEJBQ04sU0FBUzs7O0FBR0osT0FBSTtBQUlMLGFBSkMsSUFBSSxDQUlKLFNBQVMsRUFBQzs7O1VBRnRCLEtBQUssR0FBRyxFQUFFOztBQUdULFNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzNCOztnQkFOVyxJQUFJOzs7O1lBUVIsb0JBQUU7QUFDVCxVQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7TUFDdkM7OztBQVZXLFFBQUksR0FEaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUNMLElBQUksS0FBSixJQUFJO1dBQUosSUFBSTs7O21CQUFKLElBQUk7O0FBY0osNkJBQTBCO2FBQTFCLDBCQUEwQjsyQkFBMUIsMEJBQTBCOzs7aUJBQTFCLDBCQUEwQjs7WUFDaEMsZ0JBQUMsS0FBSyxFQUFDO0FBQ1osYUFBTyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUEsQ0FBRSxPQUFPLEVBQUUsQ0FBQztNQUMvQjs7O1dBSFcsMEJBQTBCOzs7eUNBQTFCLDBCQUEwQiIsImZpbGUiOiJob21lLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==