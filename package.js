Package.describe({
   name: 'mout-get',
   summary: "mout/object/get.js packaged for Meteor",
   git: 'https://github.com/chhib/meteor-mout-get.git',
   version: "0.0.1"
});

Npm.depends({
  "mout": "0.9.0"
});

Package.on_use(function(api) {
   api.add_files('mout-get.js', 'server');
   api.export('get');
});
