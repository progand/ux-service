import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('tasks', function() {
    this.route('new');
    this.route('detail', {path: 'detail/:item_id'});
  });
  this.route('me');
});

export default Router;
