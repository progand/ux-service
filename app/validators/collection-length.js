import BaseValidator from 'ember-cp-validations/validators/base';

const CollectionLength = BaseValidator.extend({
  validate(value, options /*, model, attribute*/ ) {
    if (Array.isArray(value) && value.length >= options.min) {
      return true;
    }

    return `Select at least ${options.min} ` + (options.min > 1 ? 'items' : 'item');
  }
});

CollectionLength.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor( /* attribute, options */ ) {
    return [];
  }
});

export default CollectionLength;
