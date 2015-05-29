import {inject} from 'aurelia-framework'
import {PostsRepo} from './postsRepo'

@inject(PostsRepo)
export class Home{

	posts = [];

	constructor(postsRepo){
		this.postsRepo = postsRepo;
	}

	activate(){
		this.posts = this.postsRepo.getItems();
	}

}

export class StringToBoolValueConverter {
	toView(value){
		return (value || "").toUpper();
	}
}
