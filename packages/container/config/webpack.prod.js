const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packadeJson = require("../package.json");

const domain = process.env.PROCUCTION_DOMAIN;

const prodConfig = {
  //mode production ensure to minify all files
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    //in S3 bucket I keep all files in container/latest folder, so it will add this prefix to all files
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packadeJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
