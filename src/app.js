import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Vistex blog';
    config.map([
      { route: ['','home'],  moduleId: './home', nav: true, title:'Home page' },
      { route: 'newpost', moduleId: './newpost', nav: true, title:'New post'},
      { route: ['post', 'post/:id'], moduleId: './post', nav: false, title:'Post'}
    ]);

    this.router = router;
  }
}
