System.register(["linq"], function (_export) {
	"use strict";

	var PostsRepo;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	return {
		setters: [function (_linq) {}],
		execute: function () {
			PostsRepo = (function () {
				function PostsRepo() {
					_classCallCheck(this, PostsRepo);
				}

				_createClass(PostsRepo, [{
					key: "getItems",
					value: function getItems() {
						if (typeof Storage !== "undefined") {
							var storagePost = localStorage.getItem("posts");
							if (storagePost == null || storagePost == undefined || storagePost.length == 0) return [];

							var posts = JSON.parse(storagePost);
							return posts || [];
						}
					}
				}, {
					key: "addItem",
					value: function addItem(post) {
						if (typeof Storage !== "undefined") {
							var posts = this.getItems();
							post.id = this.guid();
							posts.push(post);
							localStorage.setItem("posts", JSON.stringify(posts));
						}
					}
				}, {
					key: "getItem",
					value: function getItem(postId) {
						var post = Enumerable.From(this.getItems()).SingleOrDefault(function (x) {
							x.id == postId;
						});
						return post;
					}
				}, {
					key: "guid",
					value: function guid() {

						var S4 = function S4() {
							return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
						};

						return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
					}
				}]);

				return PostsRepo;
			})();

			_export("PostsRepo", PostsRepo);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzUmVwby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7S0FFYSxTQUFTOzs7Ozs7Ozs7QUFBVCxZQUFTO2FBQVQsU0FBUzsyQkFBVCxTQUFTOzs7aUJBQVQsU0FBUzs7WUFDYixvQkFBRTtBQUNULFVBQUcsT0FBTyxPQUFPLEFBQUMsS0FBSyxXQUFXLEVBQUU7QUFDbkMsV0FBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoRCxXQUFHLFdBQVcsSUFBSSxJQUFJLElBQUksV0FBVyxJQUFJLFNBQVMsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFDNUUsT0FBTyxFQUFFLENBQUM7O0FBRVgsV0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxjQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7T0FDbkI7TUFFRDs7O1lBRU0saUJBQUMsSUFBSSxFQUFDO0FBQ1osVUFBRyxPQUFPLE9BQU8sQUFBQyxLQUFLLFdBQVcsRUFBRTtBQUNuQyxXQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsV0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsWUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQixtQkFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO09BQ3JEO01BQ0Q7OztZQUVNLGlCQUFDLE1BQU0sRUFBQztBQUNkLFVBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVMsQ0FBQyxFQUFFO0FBQUUsUUFBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUE7T0FBQyxDQUFDLENBQUM7QUFDM0YsYUFBTyxJQUFJLENBQUM7TUFDWjs7O1lBRUcsZ0JBQUc7O0FBRU4sVUFBSSxFQUFFLEdBQUcsU0FBTCxFQUFFLEdBQWE7QUFDbEIsY0FBTyxDQUFDLEFBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBLEdBQUUsS0FBTyxHQUFFLENBQUMsQ0FBQSxDQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDakUsQ0FBQTs7QUFFRCxhQUFPLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUEsQ0FBRSxXQUFXLEVBQUUsQ0FBQztNQUNsSDs7O1dBbENXLFNBQVM7Ozt3QkFBVCxTQUFTIiwiZmlsZSI6InBvc3RzUmVwby5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=