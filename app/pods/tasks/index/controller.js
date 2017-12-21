import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  //https://guides.emberjs.com/v2.16.0/routing/query-params
  queryParams: ['page', 'q'],
  // parameter for pagination
  page: 1,
  // parameter for API request
  q: 'api',
  // variable represents search field value
  // on filter's form submit `q` changes its value to `query` and reoute refreshes with new parameters
  query: '',

  canShowMore: computed('page', 'model.[]', function() {
    return this.get('model.length') >= 4 * this.get('page');
  })
});
