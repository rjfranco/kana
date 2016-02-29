import DS from 'ember-data';

export default DS.Model.extend({
  hiragana: DS.attr(),
  katakana: DS.attr(),
  roomaji: DS.attr()
});
