import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('task-form', 'Integration | Component | task form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{task-form}}`);

  assert.ok(this.$('input').length);

  // Template block usage:
  this.render(hbs`
    {{#task-form}}
      template block text
    {{/task-form}}
  `);

  assert.ok(this.$('input').length);
});
