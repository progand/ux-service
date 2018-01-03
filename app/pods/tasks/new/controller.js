import {
  computed
} from '@ember/object';
import {
  later
} from '@ember/runloop';
import Controller from '@ember/controller';
import $ from 'jquery';

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
  countries: [],
  country: '',
  interests: [],
  isAgeRangeControlCollapsed: true,
  isCountriesControlCollapsed: true,
  isInterestsControlCollapsed: true,

  isAgeRangeSet: computed('minAge', 'maxAge', function() {
    return Number(this.get('minAge')) || this.get('maxAge') < AGE_LIMIT;
  }),

  allInterests: computed('model.[]', 'interests.[]', function() {
    return this.get('model').sortBy('name')
      .reject(interest => this.get('interests').includes(interest.get('name')))
      .mapBy('name');
  }),

  actions: {
    changeAgeRange: function(value) {
      later(() => this.setProperties({
        minAge: Math.floor(value[0]),
        maxAge: Math.floor(value[1])
      }));
    },
    ageRangeDidChange() {
      later(() => this.set('start', [this.get('minAge'), this.get('maxAge')]));
    },
    resetAgeRange() {
      this.actions.changeAgeRange.call(this, [0, AGE_LIMIT]);
      this.actions.ageRangeDidChange.call(this);
    },
    onCoutrySelected() {
      later(() => {
        this.get('countries').pushObject(this.get('country'));
        this.set('country', '');
        later(() => $('.task-form .country-input').focus(), 10);
      });
    },
    removeCountry(index) {
      this.get('countries').removeAt(index);
    },
    toggleInterest(interest) {
      if (this.get('interests').includes(interest)) {
        this.get('interests').removeObject(interest);
      } else {
        this.get('interests').pushObject(interest);
      }
    },
    async submit(title, text, minAge, maxAge, countries, interests) {
      if (title && text) {
        const task = this.get('store').createRecord('task', {
          title,
          text,
          minAge: minAge || null,
          maxAge: maxAge < AGE_LIMIT ? maxAge : null,
          countries: countries && countries.length ? countries : null,
          interests: interests && interests.length ? interests : null
        });
        return task.save().then(savedTask => this.transitionToRoute("tasks.detail", savedTask.id));
      }
    }
  }
});
