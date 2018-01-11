import Controller from '@ember/controller';
/*import {
  timeout
} from 'ember-concurrency';*/

export default Controller.extend({
  actions: {
    async submit(taskData) {
      /*console.log(taskData);
      return await timeout(1000);*/
      const task = this.get('store').createRecord('task', taskData);
      const savedTask = await task.save();
      return this.transitionToRoute("tasks.detail", savedTask.id);
    }
  }
});
