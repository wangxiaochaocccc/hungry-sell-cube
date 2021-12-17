const dataAll = require('./data.json')
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname,dir)
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      app.get('/api/seller', function(req, res) {
        res.json({
          error: 0,
          data: dataAll.seller
        })
      }),
      app.get('/api/goods', function(req, res) {
        res.json({
          error: 0,
          data: dataAll.goods
        })
      }),
      app.get('/api/ratings', function(req, res) {
        res.json({
          error: 0,
          data: dataAll.ratings
        })
      })
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets/img'))
      .set('api', resolve('src/api'))
  },
}
