import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  minAge: DS.attr('number'),
  maxAge: DS.attr('number'),
  countries: DS.attr(),
  interests: DS.attr() 
});
