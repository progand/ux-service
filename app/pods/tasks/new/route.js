import Route from '@ember/routing/route';

export default Route.extend({
  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('title', '');
      controller.set('text', '');
      controller.set('minAge', 0);
      controller.set('maxAge', 100);
    }
  },
  actions: {
    submit(title, text, minAge, maxAge) {
      if (title && text) {
        const task = this.store.createRecord('task', {
          title,
          text,
          minAge,
          maxAge
        });
        task.save().then(() => this.transitionTo("tasks.index"));
      }
    }
  }
});
