Package.describe({
  summary: "Faster touch events on mobile",
  version: '1.0.8-beta.11'
});

Package.onUse(function (api) {
  api.export('FastClick', 'web');

  api.addFiles(['pre.js', 'fastclick/lib/fastclick.js', 'post.js'], 'web');
});
