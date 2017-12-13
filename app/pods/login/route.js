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
      await this.get('session').authenticate('authenticator:custom');
      const data = this.get('session.data.authenticated');
      const providerData = data.providerData[0];
      const userData = {
        uid: providerData.uid || data.uid,
        email: providerData.email || data.email,
        name: providerData.displayName || data.displayName,
        photo: providerData.photoURL || data.photoURL,
        providerId: providerData.providerId || 'google.com',
        other: data
      }
      let users = await this.get('store').query('user', {
        orderBy: 'uid',
        startAt: userData.uid,
        limitToFirst: 1
      });
      if(users.get('length') === 0){
        const user = this.get('store').createRecord('user', userData);
        await user.save();
      }
      return this.transitionTo('tasks');
    }
  }
});
