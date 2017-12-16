import { later } from '@ember/runloop';
import Controller from '@ember/controller';

const AGE_LIMIT = 130;

export default Controller.extend({
  AGE_LIMIT,
  title: '',
  text: '',
  minAge: 0,
  maxAge: AGE_LIMIT,
  range: {
    'min': [0],
    'max': [AGE_LIMIT]
  },
  start: [0, AGE_LIMIT],

  actions: {
    changeAgeRange: function(value) {
      later(() => this.setProperties({
        minAge: Math.floor(value[0]),
        maxAge: Math.floor(value[1])
      }));
    },
    ageRangeDidChange(){
      later(() => this.set('start', [this.get('minAge'), this.get('maxAge')]));
    }
  }
});
