import 'linq';

export class PostsRepo{
	getItems(){
		if(typeof(Storage) !== "undefined") {
			var storagePost = localStorage.getItem("posts");
			if(storagePost == null || storagePost == undefined || storagePost.length == 0)
				return [];

			var posts = JSON.parse(storagePost);
			return posts || [];
		}

	}

	addItem(post){
		if(typeof(Storage) !== "undefined") {
			var posts = this.getItems();
			post.id = this.guid();
			posts.push(post);
			localStorage.setItem("posts", JSON.stringify(posts));
		}
	}

	getItem(postId){
		var post = Enumerable.From(this.getItems()).SingleOrDefault(function(x) { x.id == postId});
		return post;
	}

	guid() {

		var S4 = function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		}

		return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
	}
}
