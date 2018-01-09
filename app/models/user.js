import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  photo: DS.attr('string'),
  provider: DS.attr('string'),
  other: DS.attr({ defaultValue: null }),
  countries: DS.attr({ defaultValue: null }),
  interests: DS.attr({ defaultValue: null })
});
