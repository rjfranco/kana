import DS from 'ember-data';

export default DS.Model.extend({
  hiragana: DS.attr(),
  roomaji: DS.attr(),
  definition: DS.attr()
});
