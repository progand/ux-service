import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('task', {
      countries: [],
      interests: []
    });
  },

  actions: {
    willTransition() {
      const model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
