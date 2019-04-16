module.exports = {
   configureWebpack: {
      module: {
         rules: [
            {
               test: /.html$/,
               loader: "vue-template-loader",
               exclude: /index.html/
            },
            {
               test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
               loader: 'url-loader'
            },
         ]
      }
   },
   css: {
      loaderOptions: {
         sass: {
            data: `@import "@/theme/_default.scss";`
         }
      }
   }
};