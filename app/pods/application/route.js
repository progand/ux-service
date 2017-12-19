import {
  Promise as EmberPromise
} from 'rsvp';
import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import findRecord from 'ux-service/utils/find-record';

async function preloadCurrentUser() {
  const uid = this.get('session.data.authenticated.uid');
  let user = null;
  if (uid) {
    user = await findRecord(this.get('store'), 'user', 'uid', uid);
  }
  return user;
}

export default Route.extend(ApplicationRouteMixin, {
  session: service(),

  beforeModel() {
    return EmberPromise.resolve(this._super(...arguments)).then(() => {
      return preloadCurrentUser.call(this);
    });
  },

  async model() {
    await EmberPromise.resolve(this._super(...arguments));
    const user = await preloadCurrentUser.call(this);
    return user;
  }
});
