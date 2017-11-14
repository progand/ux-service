import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    signIn: function(){
      var controller = this.controllerFor('login');
      // The provider name is passed to `open`
      this.get('torii').open('google-oauth2').then(function(authorization){
        controller.set('authorization', authorization);
        controller.set('authorizationData', JSON.stringify(authorization, null, 4));
      });
    }
  }
});
