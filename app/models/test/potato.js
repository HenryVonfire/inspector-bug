import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
  skin: attr('string'),
  body: attr('string'),
  taste: attr('string')
});
