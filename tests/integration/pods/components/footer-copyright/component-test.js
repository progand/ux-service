import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('footer-copyright', 'Integration | Component | footer copyright', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{footer-copyright}}`);

  assert.ok(this.$('footer').length);

  // Template block usage:
  this.render(hbs`
    {{#footer-copyright}}
      template block text
    {{/footer-copyright}}
  `);

  assert.ok(this.$('footer').length);
});
