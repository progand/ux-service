import Controller from '@ember/controller';
/*import {
  timeout
} from 'ember-concurrency';*/

export default Controller.extend({
  actions: {
    async submit(task) {
      /*console.log(taskData);
      return await timeout(1000);*/
      const savedTask = await task.save();
      return this.transitionToRoute("tasks.detail", savedTask.id);
    }
  }
});
