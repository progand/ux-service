import Route from '@ember/routing/route';
import fetch from 'ember-fetch/ajax';

export default Route.extend({
  model () {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        return response;
      });
  }
});