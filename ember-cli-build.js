/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    },
    babel: {
      plugins: [
        'transform-object-rest-spread'
      ]
    },
    sassOptions: {
      includePaths: ['app']
    },
    'ember-cli-image-transformer': {
      images: [{
        inputFilename: 'lib/images/brand-icon.svg',
        outputFileName: 'appicon-',
        convertTo: 'png',
        destination: 'assets/icons/',
        sizes: [32, 192, 280, 512]
      }]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import({
    development: "node_modules/css-spaces/dist/spaces.bootstrap.css",
    production: "node_modules/css-spaces/dist/spaces.bootstrap.min.css"
  });
  /*app.import({
    development: "node_modules/nouislider/distribute/nouislider.css",
    production: "node_modules/nouislider/distribute/nouislider.min.css"
  });
  app.import({
    development: "node_modules/nouislider/distribute/nouislider.js",
    production: "node_modules/nouislider/distribute/nouislider.min.css"
  })*/

  return app.toTree();
};
