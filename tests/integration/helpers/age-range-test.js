
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('age-range', 'helper:age-range', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 18);

  this.render(hbs`{{age-range inputValue}}`);

  assert.equal(this.$().text().trim(), 'from 18');
});
