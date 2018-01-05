import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  // redirect authenticated user to /tasks
  routeIfAlreadyAuthenticated: 'tasks.index'
});
