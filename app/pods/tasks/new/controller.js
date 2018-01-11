import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async submit(taskData) {
      const task = this.get('store').createRecord('task', taskData);
      const savedTask = await task.save();
      return this.transitionToRoute("tasks.detail", savedTask.id)
    }
  }
});
