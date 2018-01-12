import DS from 'ember-data';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';

const Validations = buildValidations({
  age: [
    validator('presence', true),
    validator('number', {
      allowString: true,
      integer: true,
      gt: 0,
      lt: 130
    })
  ],
  country: [
    validator('presence', true)
  ],
  interests: [
    validator('collection-length', {min: 1})
  ]
});

export default DS.Model.extend(Validations, {
  // attributes
  uid: DS.attr('string'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  photo: DS.attr('string'),
  provider: DS.attr('string'),
  age: DS.attr('number'),
  country: DS.attr('string'),
  interests: DS.attr({
    defaultValue: null
  }),
  // all data from provider
  other: DS.attr({
    defaultValue: null
  }),
});
