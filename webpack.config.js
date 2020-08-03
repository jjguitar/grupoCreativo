const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const shouldAnalyze = process.argv.includes('--analyze');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

require('dotenv').config();

const { ENV } = process.env;

const isDev = ENV === 'development';
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
  );
}

module.exports = {
  entry,
  mode: ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            // eslint-disable-next-line arrow-parens
            return chunks.some(
              (chunk) => chunks.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name),
            );
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
    shouldAnalyze ? new BundleAnalyzerPlugin() : () => {},
    isDev ?
      () => {} :
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        filename: '[path].gz',
      }),
    isDev ? () => {} : new ManifestPlugin(),
    isDev ?
      () => {} :
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: path.resolve(
          __dirname,
          'src/server/public',
        ),
      }),
  ],
};
