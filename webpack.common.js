const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const purgecss = require('@fullhuman/postcss-purgecss');

const pages = [
  'index',
  'get-started',
  'whitepaper',
  'who-is-emerald',
  'community',
  'contact',
];

module.exports = {
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    ...pages.map((page) => {
      return new HtmlWebpackPlugin({
        template: `./src/pages/${page}.pug`,
        filename: `${page}.html`,
      });
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'tailwindcss',
                  purgecss({
                    content: ['./src/**/*.pug'],
                    defaultExtractor: (content) =>
                      content.match(/[\w-:/]+(?<!:)/g) || [],
                  }),
                  'autoprefixer',
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
