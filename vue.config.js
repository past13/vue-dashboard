const webpack = require("webpack");

module.exports = {
  transpileDependencies: [
    'vuex-module-decorators',
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ["vue-property-decorator", "Vue"],
        VueConstructor: ["vue", "VueConstructor"],
        Component: ["vue-property-decorator", "Component"],
        Prop: ["vue-property-decorator", "Prop"],
        Ref: ["vue-property-decorator", "Ref"],
        Watch: ["vue-property-decorator", "Watch"],
        Emit: ["vue-property-decorator", "Emit"],
        Inject: ["vue-property-decorator", "Inject"],
        InjectReactive: ["vue-property-decorator", "InjectReactive"],
        Model: ["vue-property-decorator", "Model"],
        PropSync: ["vue-property-decorator", "PropSync"],
        Provide: ["vue-property-decorator", "Provide"],
        ProvideReactive: ["vue-property-decorator", "ProvideReactive"],
      }),
    ],
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/app"
};