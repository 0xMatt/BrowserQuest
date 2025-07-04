const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = env => {
  const environment = env.NODE_ENV;
  console.log('Project is running with environment: ', environment);

  return {
    entry: './client/ts/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist/client'),
      filename: 'main.js',
      clean: true, // Clean dist folder before each build
    },

    resolve: {
      extensions: ['.ts', '.js']
    },

    // Source maps support
    devtool: 'source-map',

    module: {
      rules: [ // Changed from 'loaders' to 'rules'
        {
          test: /\.ts$/,
          use: {
            loader: 'ts-loader', // Replaced awesome-typescript-loader
            options: {
              configFile: 'client/tsconfig.json'
            }
          },
          exclude: /node_modules/
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Fate of the Four',
        template: './client/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [ // New patterns format
          { from: 'client/img/', to: 'img/' },
          { from: 'client/audio/', to: 'audio/' },
          { from: 'client/css/', to: 'css/' },
          { from: 'client/fonts/', to: 'fonts/' },
          { from: 'client/maps/', to: 'maps/' },
          { from: 'client/sprites/', to: 'sprites/' },
          { from: 'client/ts/map/mapworker.js', to: 'mapworker.js' },
          { from: 'client/ts/lib/', to: 'lib/' },
          { from: 'client/config/config.prod.json', to: 'client/config/config.json' },
        ],
      }),
    ],

    // Development server configuration
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist/client'),
      },
      compress: true,
      port: 8008,
      open: true,
      hot: true,
      // Added for webpack-dev-server v5 compatibility
      allowedHosts: 'all', // Allows connections from any host
      client: {
        logging: 'info',
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      // Optional: Add headers for better development experience

    },

    // Performance hints
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  };
};
