import Route from '@ember/routing/route';
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let task = this.modelFor('tasks');
    return Ember.RSVP.hash({
      task: task.findBy('id', params.id)
    });
  }
});