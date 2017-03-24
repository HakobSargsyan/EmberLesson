import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('star-rating', 'Integration | Component | star rating', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(5);

  var song = Ember.Object.create({rating : 4});
  this.set('song' , song);
  this.set('maxRating' , 5);

  this.render(hbs`{{star-rating item=song rating=song.rating maxRating=maxRating}}`);

  assert.equal(this.$('.glyphicon-star').length, 4, 'The right amount of full stars is rendered after changing maxRating');
  assert.equal(this.$('.glyphicon-star-empty').length, 6, 'The right amount of empty stars is rendered after changing maxRating');

  this.set('song.rating', 2);
  assert.equal(this.$('.glyphicon-star').length, 2, 'The right amount of full stars is rendered after changing rating');
  assert.equal(this.$('.glyphicon-star-empty').length, 8, 'The right amount of empty stars is rendered after changing rating');

 

  // Template block usage:
  this.render(hbs`
    {{#star-rating}}
      template block text
    {{/star-rating}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
