System.register(['aurelia-framework', './postsRepo', './app'], function (_export) {
  'use strict';

  var inject, PostsRepo, App, Post;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_postsRepo) {
      PostsRepo = _postsRepo.PostsRepo;
    }, function (_app) {
      App = _app.App;
    }],
    execute: function () {
      Post = (function () {
        function Post(postsRepo, app) {
          _classCallCheck(this, _Post);

          this.postsRepo = postsRepo;
          this.app = app;
        }

        var _Post = Post;

        _createClass(_Post, [{
          key: 'activate',
          value: function activate(params, routeConfig) {

            if (params.id == null) {
              this.app.router.navigate('');
              return;
            }

            this.post = this.postsRepo.getItem(params.id);
          }
        }, {
          key: 'submit',
          value: function submit() {
            console.log('end');
            navigate('');
          }
        }]);

        Post = inject(PostsRepo, App)(Post) || Post;
        return Post;
      })();

      _export('Post', Post);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhCQUthLElBQUk7Ozs7Ozs7O2lDQUxULE1BQU07OzZCQUNOLFNBQVM7O2lCQUNULEdBQUc7OztBQUdFLFVBQUk7QUFFSixpQkFGQSxJQUFJLENBRUgsU0FBUyxFQUFFLEdBQUcsRUFBQzs7O0FBQ3pCLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2hCOztvQkFMVSxJQUFJOzs7O2lCQU9QLGtCQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUM7O0FBRTNCLGdCQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFDO0FBQ3BCLGtCQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0IscUJBQU87YUFDUjs7QUFFRCxnQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7V0FDL0M7OztpQkFFSyxrQkFBRTtBQUNOLG1CQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLG9CQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7V0FDZDs7O0FBcEJVLFlBQUksR0FEaEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FDVixJQUFJLEtBQUosSUFBSTtlQUFKLElBQUk7OztzQkFBSixJQUFJIiwiZmlsZSI6InBvc3QuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9