System.register(['aurelia-framework'], function (_export) {
	'use strict';

	var bindable, TopBar;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			TopBar = (function () {
				var _instanceInitializers = {};

				function TopBar() {
					_classCallCheck(this, TopBar);

					_defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);
				}

				_createDecoratedClass(TopBar, [{
					key: 'router',
					decorators: [bindable],
					initializer: function () {
						return null;
					},
					enumerable: true
				}], null, _instanceInitializers);

				return TopBar;
			})();

			_export('TopBar', TopBar);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2VBRWEsTUFBTTs7Ozs7Ozs7OztnQ0FGWCxRQUFROzs7QUFFSCxTQUFNOzs7YUFBTixNQUFNOzJCQUFOLE1BQU07Ozs7OzBCQUFOLE1BQU07O2tCQUVqQixRQUFROzthQUNBLElBQUk7Ozs7O1dBSEQsTUFBTTs7O3FCQUFOLE1BQU0iLCJmaWxlIjoidG9wLWJhci5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=