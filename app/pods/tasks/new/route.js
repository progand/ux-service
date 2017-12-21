import Route from '@ember/routing/route';

export default Route.extend({
  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('title', '');
      controller.set('text', '');
      controller.set('minAge', 0);
      controller.set('maxAge', controller.AGE_LIMIT);
      controller.set('countries', []);
      controller.set('country', '');
    }
  },
  actions: {
    submit(title, text, minAge, maxAge, countries) {
      if (title && text) {
        const task = this.store.createRecord('task', {
          title,
          text,
          minAge: minAge || undefined,
          maxAge: maxAge < this.controller.AGE_LIMIT ? maxAge : undefined,
          countries: countries && countries.length ? countries : undefined
        });
        task.save().then(() => this.transitionTo("tasks.index"));
      }
    }
  }
});
