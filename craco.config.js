const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@__mocks__': path.resolve(__dirname, 'src/__mocks__'),
    },
  },
};
