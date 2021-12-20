module.exports = {
  publicPath: process.env.SERVER_ENV === `NETLIFY` ? `/` : `/maple/`, // 基本路径, 建议以绝对路径跟随访问目录
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.(txt|md)$/i,
      use: [{
        loader: 'raw-loader',
      }]
    })
  },
  css: {
    sourceMap: true,
  },
}
