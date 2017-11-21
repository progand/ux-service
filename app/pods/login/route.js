import {
  inject as service
} from '@ember/service';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),

  actions: {
    // action to trigger authentication with Google+
    async authenticateWithGooglePlus() {
      await this.get('session').authenticate('authenticator:torii', 'google-oauth2-bearer');
      this.transitionTo('index');
    }
  }
});
