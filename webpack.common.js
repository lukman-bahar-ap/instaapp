const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const plugins = [];
if (!devMode) {
  // enable in production only
  plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 60000,
      minChunks: 6,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: './src/public/icons/favicon.ico',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/public/images',
          to: 'img/',
        },
        {
          from: './src/DATA-VIRAL-MENU.json',
          to: 'dummy/DATA.json',
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'diresto',
      short_name: 'diresto',
      description: 'Diresto discover cafe and resto',
      background_color: '#ff9642',
      theme_color: '#ff9642',
      display: 'standalone',
      filename: 'manifest.json',
      start_url: '/index.html',
      crossorigin: null,
      fingerprints: false,
      icons: [
        {
          src: path.resolve('src/public/icons/icon-192x192.png'),
          size: [72, 96, 128, 144, 152, 192],
        },
        {
          src: path.resolve('src/public/icons/icon-384x384.png'),
          size: [256, 384],
          purpose: 'any maskable',
        },
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          size: '512x512',
          purpose: 'maskable',
        },
      ],
    }),
    new GenerateSW({
      skipWaiting: true,
      clientsClaim: true,
      ignoreURLParametersMatching: [/.*/],
      // Define runtime caching rules.
      runtimeCaching: [{
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: (request) => request.destination === 'image',
        // Apply a cache-first strategy.
        handler: 'CacheFirst',
        options: {
          // Use a custom cache name.
          cacheName: 'images',
          // Only cache 30 images.
          expiration: {
            maxEntries: 30,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
        },
      },
      {
        urlPattern: /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|search|detail))/,
        // Apply a cache-first strategy.
        handler: 'StaleWhileRevalidate',
        options: {
          // Use a custom cache name.
          cacheName: 'dicoding-restaurant-api',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
        },
      },
      {
        urlPattern: /.*(?:googleapis|gstatic)\.com/,
        // Apply a cache-first strategy.
        handler: 'StaleWhileRevalidate',
        options: {
          // Use a custom cache name.
          cacheName: 'google-fonts-stylesheets',
          expiration: {
            maxAgeSeconds: 120 * 24 * 60 * 60, // 120 Days
            maxEntries: 100,
          },
        },
      }],
      cleanupOutdatedCaches: true,
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /hero-image_2\.jpg|logo\.png/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
};
