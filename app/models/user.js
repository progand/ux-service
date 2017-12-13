import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  email: DS.attr('string'),
  name: DS.attr('string'),
  photo: DS.attr('string'),
  providerId: DS.attr('string'),
  other: DS.attr()
});
