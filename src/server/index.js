require('@babel/register')({
  presets: ['@babel/preset-env']
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif','svg'],
  name: '/assets/[hash].[ext]',
});

require('./server');
