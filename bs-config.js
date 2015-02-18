'use strict';

module.exports = {
  files: ['dist/**/*', 'src/**/*'],
  exclude: false,
  server: {
    baseDir: 'dist',
    index: 'index.html'
  },
  port: 9000,
  startPath: null,
  ghostMode: {
    clicks: true,
    links: true,
    forms: true,
    scroll: true
  },
  open: false,
  noOpen: false,
  noNotify: false,
  xip: true,
  timestamps: true,
  fileTimeout: 1000,
  injectChanges: true,
  scrollProportionally: true,
  scrollThrottle: 0,
  notify: false,
  host: null,
  excludedFileTypes: [],
  reloadDelay: 0
};
