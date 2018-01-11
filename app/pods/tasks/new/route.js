import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    return this.get('store').findAll('interest');
  }
});
