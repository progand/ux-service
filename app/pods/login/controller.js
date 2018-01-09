import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  session: service(),
  error: null,

  actions: {
    // action to trigger authentication with Google+
    async authenticateWith(provider) {
      try {
        this.set('error', null);
        await this.get('session').authenticate('authenticator:custom', this.get('store'), provider);
      } catch (err) {
        this.set('error', err);
      }
    }
  }
});
