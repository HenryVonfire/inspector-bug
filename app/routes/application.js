import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').createRecord('test/potato',{
      id:'1',
      skin: 'soft',
      body: 'hot',
      taste: 'good'
    });
  }
});