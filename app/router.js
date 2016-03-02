import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hiragana');
  this.route('katakana');
  this.route('vocab');
  this.route('reference', function() {
    this.route('vocab');
  });
});

export default Router;
