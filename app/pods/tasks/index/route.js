import Route from '@ember/routing/route';

export default Route.extend({
  // https://guides.emberjs.com/v2.16.0/routing/query-params/#toc_opting-into-a-full-transition
  queryParams: {
    page: {
      refreshModel: true // reload on change
    },
    q: {
      refreshModel: true // reload on change
    }
  },

  model(params) {
    return this.store.query('task', {
      limitToLast: params.page * 4
    });
  },

  // setup initial `query` value
  setupController(controller) {
    this._super(...arguments);
    controller.set('query', controller.get('q'));
  },

  actions:{
    showMore(){
      this.controller.incrementProperty('page', 1);
    }
  }
});
