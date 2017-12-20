/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ux-service',
    podModulePrefix: 'ux-service/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {},
    firebase: {
      apiKey: "AIzaSyAIkSbbzkF8TKJ4vVyo3KY_D5bI6n5UwzY",
      authDomain: "test-my-ui.firebaseapp.com",
      databaseURL: "https://test-my-ui.firebaseio.com",
      projectId: "test-my-ui",
      storageBucket: "test-my-ui.appspot.com",
      messagingSenderId: "355805832589"
    },
    // https://emberobserver.com/addons/ember-place-autocomplete
    'place-autocomplete': {
      exclude: false, // exclude the Google API from the page if it is already loaded in your app
      key: 'AIzaSyCNJWcI0qrzE8hL-luvdVARvpTW9c8yhTA',
      //client: '748085729435-loca6ip9ir7psprv463s48cr3jvmfs7a.apps.googleusercontent.com',
      version: 3.29, // Optional - if client is set version must be above 3.24
      language: 'en', // Optional - be default will be based on your browser language
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
