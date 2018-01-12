import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:collection-length', 'Unit | Validator | collection-length', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
