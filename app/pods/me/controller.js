import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import {
  task
} from 'ember-concurrency';

export default Controller.extend({
  availableInterests: computed('allInterests.[]', 'model.interests.[]', function() {
    return this.get('allInterests').sortBy('name')
      .reject(interest => (this.get('model.interests') || []).includes(interest.get('name')))
      .mapBy('name');
  }),


  init() {
    this._super(...arguments);
    this.set('allInterests', []);
    if(this.get('store')){
      this.get('store').findAll('interest').then(allInterests => this.set('allInterests', allInterests));
    }
  },

  actions: {
    toggleInterest(interest) {
      if (this.get('submit.isRunning')) return;
      if(!Array.isArray(this.get('model.interests'))){
        this.set('model.interests', []);
      }
      if (this.get('model.interests').includes(interest)) {
        this.get('model.interests').removeObject(interest);
      } else {
        this.get('model.interests').pushObject(interest);
      }
    }
  },

  submit: task(function*() {
    const model = this.get('model');
    if (this.get('model.validations.isValid')) {
      return yield model.save();
    }
  }).drop()

});
