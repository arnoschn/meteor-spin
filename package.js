Package.describe({
  summary: "Simple spinner package for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files(['lib/spin.js'], 'client');
});