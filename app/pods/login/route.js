import {
  inject as service
} from '@ember/service';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import findRecord from 'ux-service/utils/find-record';

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),

  actions: {
    // action to trigger authentication with Google+
    async authenticateWithGooglePlus() {
      await this.get('session').authenticate('authenticator:custom');
      const data = this.get('session.data.authenticated');
      const userData = {
        uid: data.uid,
        email: data.email,
        name: data.displayName,
        photo: data.photoURL,
        providerId: 'google.com',
        other: data
      }
      let user = await findRecord(this.get('store'), 'user', 'uid', userData.uid);
      if(!user){
        user = this.get('store').createRecord('user', userData);
        await user.save();
      }
      return this.transitionTo('tasks');
    }
  }
});
