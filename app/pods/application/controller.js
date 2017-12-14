import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  session: service(),
  inverse: true,
  collapsed: true,

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
