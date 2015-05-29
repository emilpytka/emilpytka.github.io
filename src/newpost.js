import {inject} from 'aurelia-framework'
import {PostsRepo} from './postsRepo'

@inject(PostsRepo)
export class NewPost{
	title = "";
	content = "";

	constructor(postsRepo){
		this.postsRepo = postsRepo;
	}

	submit(){
		this.postsRepo.addItem({title: this.title, content: this.content});
		navigate('#');
	}
}