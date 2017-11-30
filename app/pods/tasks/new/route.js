import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    submit(title, text) {
      if (title && text) {
        const task = this.store.createRecord('task', {
          title,
          text
        });
        task.save().then(() => this.transitionTo("tasks.index"));
      }
    }
  }
});
