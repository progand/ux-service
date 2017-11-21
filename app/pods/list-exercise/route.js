import Ember from 'ember';
import fetch from 'ember-fetch/ajax';

export default Ember.Route.extend({
  model () {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        return response;
      });
  }
});