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
    yield this.get('session').authenticate('authenticator:custom', this.get('store'), provider);
    const uid = this.get('session.data.authenticated.uid');
    const user = this.get('store').peekAll('user').findBy('uid', uid);
    if(!user.get('validations.isValid')){
      this.transitionToRoute('me');
    }
  }).drop()
});
