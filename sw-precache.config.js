module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  runtimeCaching: [{
    urlPattern: "https://59b14331ffff010011b4ef98.mockapi.io/books",
    handler: 'networkFirst'
  }],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};
