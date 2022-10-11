export default {
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-url': {}
    }
  },
  extend (config, ctx) {
    config.module.rules
      .filter(moduleRules => moduleRules.test.toString().includes('svg'))
      .forEach((rule) => { rule.test = /\.(png|jpe?g|gif)$/ })
    // urlLoader.test = /\.(png|jpe?g|gif)$/
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
      exclude: /node_modules/
    })
  }
}
