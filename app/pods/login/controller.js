import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import {
  task
} from 'ember-concurrency';

export default Controller.extend({
  session: service(),

  authenticateWithProvider: task(function*(provider) {
    return yield this.get('session').authenticate('authenticator:custom', this.get('store'), provider);
  }).drop()
});
