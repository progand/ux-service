import DS from 'ember-data';
import {
  computed
} from '@ember/object';
import { alias, bool, and } from '@ember/object/computed';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';


const Validations = buildValidations({
  title: [
    validator('presence', true),
    validator('length', {
      min: 10
    })
  ],
  text: [
    validator('presence', true),
    validator('length', {
      min: 100
    })
  ]
});

export default DS.Model.extend(Validations, {
  // attributes
  title: DS.attr('string'),
  text: DS.attr('string'),
  minAge: DS.attr('number'),
  maxAge: DS.attr('number'),
  countries: DS.attr(),
  interests: DS.attr(),


  // read-only flags
  changedModelAttributes: computed('{title,text}', function() {
    return this.changedAttributes();
  }),
  isTitleChanged: bool('changedModelAttributes.title'),
  isTitleValid: alias('validations.attrs.title.isValid'),
  isTitleValidationSucceeds: and('isTitleChanged', 'isTitleValid'),
  isTitleValidationFails: and('isTitleChanged', 'validations.attrs.title.errors'),

  isTextChanged: bool('changedModelAttributes.text'),
  isTextValid: alias('validations.attrs.text.isValid'),
  isTextValidationSucceeds: and('isTextChanged', 'isTextValid'),
  isTextValidationFails: and('isTextChanged', 'validations.attrs.text.errors')
});
