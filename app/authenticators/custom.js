import {
  inject as service
} from '@ember/service';
import {
  Promise as EmberPromise
} from 'rsvp';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  session: service(),
  torii: service(),

  authenticate() {
    return this.get('torii').open('firebase', {
      provider: 'google'
    }).then(authorization => authorization.toJSON());
  },

  restore(data) {
    return EmberPromise.resolve(data);
  },
});
