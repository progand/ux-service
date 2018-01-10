module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'Chrome'
  ],
  launch_in_dev: [
    'Chrome'
  ],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: [
        '--disable-gpu',
        '--headless',
        "--remote-debugging-port=9222",
        "--remote-debugging-address=0.0.0.0",
        '--no-sandbox',
        "--user-data-dir=/tmp"
      ]
    }
  }
};
