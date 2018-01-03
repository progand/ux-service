import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    return this.get('store').findAll('interest');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('title', '');
      controller.set('text', '');
      controller.set('minAge', 0);
      controller.set('maxAge', controller.AGE_LIMIT);
      controller.set('countries', []);
      controller.set('interests', []);
      controller.set('country', '');
    }
  }
});
