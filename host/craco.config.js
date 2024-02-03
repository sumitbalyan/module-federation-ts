const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        remotes: {
          mfe: "mfe@http://localhost:3002/remoteEntry.js",
        },
        shared: ["react", "react-dom"],
      }),
    ],
  },
};
