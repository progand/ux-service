/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Test My UI",
    short_name: "TestMyUI",
    description: "UX testing service",
    lang: "en-US",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#EB6864",
    theme_color: "#EB6864",
    icons: [
      ...[192, 280, 512].map((size) => ({
        src: `/assets/icons/appicon-${size}.png`,
        sizes: `${size}x${size}`
      }))
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
