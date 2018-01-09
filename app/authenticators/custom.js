import {
  inject as service
} from '@ember/service';
import {
  Promise as EmberPromise
} from 'rsvp';
import Base from 'ember-simple-auth/authenticators/base';
import findRecord from 'ux-service/utils/find-record';

export default Base.extend({
  session: service(),
  torii: service(),

  async authenticate(store, provider) {
    const authorization = await this.get('torii').open('firebase', {
      provider
    });
    const data = authorization.toJSON();
    const userData = {
      uid: data.uid,
      email: data.email,
      name: data.displayName,
      photo: data.photoURL,
      provider,
      other: data
    }
    let user = await findRecord(store, 'user', 'uid', userData.uid);
    if (!user) {
      user = store.createRecord('user', userData);
      await user.save();
    }
    return data;
  },

  restore(data) {
    return EmberPromise.resolve(data);
  },
});
