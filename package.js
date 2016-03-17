Package.describe({
  summary: "Faster touch events on mobile",
  version: '1.0.9-rc.2'
});

Package.onUse(function (api) {
  api.export('FastClick', 'web');

  api.addFiles(['pre.js', 'fastclick/lib/fastclick.js', 'post.js'], 'web');
});
