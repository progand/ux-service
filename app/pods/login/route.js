import Route from '@ember/routing/route';
import ajax from 'ember-fetch/ajax';

export default Route.extend({
  actions: {
    async signIn() {
      var controller = this.controllerFor('login');
      // The provider name is passed to `open`
      const authorization = await this.get('torii').open('google-oauth2-bearer');
      const googleToken = authorization.authorizationToken.access_token;
      controller.set('authorization', authorization);
      controller.set('authorizationData', JSON.stringify(authorization, null, 4));
      //ajax('https://people.googleapis.com/v1/people/me?requestMask.includeField=person.ageRange&fields=ageRange&access_token=' + googleToken);
      const tokeninfo = await ajax('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + googleToken);
      controller.set('authorizationData', JSON.stringify({
        ...authorization,
        ...tokeninfo
      }, null, 4));
    }
  }
});
