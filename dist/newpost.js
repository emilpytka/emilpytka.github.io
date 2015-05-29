System.register(['aurelia-framework', './postsRepo'], function (_export) {
	'use strict';

	var inject, PostsRepo, NewPost;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_postsRepo) {
			PostsRepo = _postsRepo.PostsRepo;
		}],
		execute: function () {
			NewPost = (function () {
				function NewPost(postsRepo) {
					_classCallCheck(this, _NewPost);

					this.title = '';
					this.content = '';

					this.postsRepo = postsRepo;
				}

				var _NewPost = NewPost;

				_createClass(_NewPost, [{
					key: 'submit',
					value: function submit() {
						this.postsRepo.addItem({ title: this.title, content: this.content });
						navigate('#');
					}
				}]);

				NewPost = inject(PostsRepo)(NewPost) || NewPost;
				return NewPost;
			})();

			_export('NewPost', NewPost);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Bvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dCQUlhLE9BQU87Ozs7Ozs7OzhCQUpaLE1BQU07OzBCQUNOLFNBQVM7OztBQUdKLFVBQU87QUFJUixhQUpDLE9BQU8sQ0FJUCxTQUFTLEVBQUM7OztVQUh0QixLQUFLLEdBQUcsRUFBRTtVQUNWLE9BQU8sR0FBRyxFQUFFOztBQUdYLFNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzNCOzttQkFOVyxPQUFPOzs7O1lBUWIsa0JBQUU7QUFDUCxVQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztBQUNuRSxjQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDZDs7O0FBWFcsV0FBTyxHQURuQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQ0wsT0FBTyxLQUFQLE9BQU87V0FBUCxPQUFPOzs7c0JBQVAsT0FBTyIsImZpbGUiOiJuZXdwb3N0LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==