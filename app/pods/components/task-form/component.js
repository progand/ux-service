import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {
  later
} from '@ember/runloop';
import $ from 'jquery';
import {
  task
} from 'ember-concurrency';

const AGE_LIMIT = 130;

export default Component.extend({
  classNames: ['task-form'],
  model: null,
  AGE_LIMIT,
  country: '',
  isAgeRangeControlCollapsed: true,
  isCountriesControlCollapsed: true,
  isInterestsControlCollapsed: true,

  onSubmit: () => {},

  init() {
    this._super(...arguments);
    this.range = {
      'min': [0],
      'max': [AGE_LIMIT]
    };
    this.start = [0, AGE_LIMIT];
    this.allInterests = [];
    if(this.get('store')){
      this.get('store').findAll('interest').then(allInterests => this.set('allInterests', allInterests));
    }    
  },

  isAgeRangeSet: computed('model.{minAge,maxAge}', function() {
    return Number(this.get('model.minAge')) || this.get('model.maxAge') < AGE_LIMIT;
  }),

  availableInterests: computed('allInterests.[]', 'model.interests.[]', function() {
    return this.get('allInterests').sortBy('name')
      .reject(interest => this.get('model.interests').includes(interest.get('name')))
      .mapBy('name');
  }),

  changedModelAttributes: computed('model.{title,text}', function() {
    return this.get('model').changedAttributes();
  }),

  actions: {
    changeAgeRange: function(value) {
      later(() => this.get('model').setProperties({
        minAge: Math.floor(value[0]),
        maxAge: Math.floor(value[1])
      }));
    },
    ageRangeDidChange() {
      later(() => this.set('start', [this.get('model.minAge'), this.get('model.maxAge')]));
    },
    resetAgeRange() {
      this.actions.changeAgeRange.call(this, [0, AGE_LIMIT]);
      this.actions.ageRangeDidChange.call(this);
    },
    onCoutrySelected() {
      later(() => {
        this.get('model.countries').pushObject(this.get('country'));
        this.set('country', '');
        later(() => $('.task-form .country-input').focus(), 10);
      });
    },
    removeCountry(index) {
      this.get('model.countries').removeAt(index);
    },
    toggleInterest(interest) {
      if (this.get('submit.isRunning')) return;
      if (this.get('model.interests').includes(interest)) {
        this.get('model.interests').removeObject(interest);
      } else {
        this.get('model.interests').pushObject(interest);
      }
    }
  },

  submit: task(function*() {
    const model = this.get('model');
    if (this.get('model.validations.isValid')) {
      model.setProperties({
        minAge: this.get('model.minAge') || null,
        maxAge: this.get('model.maxAge') < AGE_LIMIT ? this.get('model.maxAge') : null,
      });
      return yield this.get('onSubmit')(model);
    }
  }).drop()
});
