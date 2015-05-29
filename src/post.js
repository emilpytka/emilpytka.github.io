import {inject} from 'aurelia-framework'
import {PostsRepo} from './postsRepo'
import {App} from './app'

@inject(PostsRepo, App)
export class Post {

  constructor(postsRepo, app){
    this.postsRepo = postsRepo;
    this.app = app;
  }

  activate(params, routeConfig){

    if (params.id == null){
      this.app.router.navigate('');
      return;
    }

    this.post = this.postsRepo.getItem(params.id);
  }

  submit(){
    console.log('end');
    navigate('');
  }

}
