'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // LOCAL_HOST: '"http://159.89.179.17:1337"'
  LOCAL_HOST: '"http://localhost:1337"'
  // LOCAL_HOST: '"https://mogul-api.appspot.com"'

})
