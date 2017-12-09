import Route from '@ember/routing/route';

export default Route.extend({
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
