import Route from '@ember/routing/route';
import ajax from 'ember-fetch/ajax';

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
    // This gets called upon entering 'tasks' route
    // for the first time, and we opt into refiring it upon
    // query param changes by setting `refreshModel:true` above.

    // params has format of { page: "someNumberOrJustZero" },
    // which we can forward to the server.
    return ajax(`https://api.github.com/search/issues?q=${params.q}&page=${params.page}&per_page=10`);
  },

  // setup initial `query` value
  setupController(controller) {
    this._super(...arguments);
    controller.set('query', controller.get('q'));
  }
});
