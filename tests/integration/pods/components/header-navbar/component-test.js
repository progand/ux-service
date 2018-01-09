import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('header-navbar', 'Integration | Component | header navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{header-navbar}}`);

  assert.ok(this.$('.navbar').length);

  // Template block usage:
  this.render(hbs`
    {{#header-navbar}}
      template block text
    {{/header-navbar}}
  `);

  assert.ok(this.$('.navbar').length);
});
