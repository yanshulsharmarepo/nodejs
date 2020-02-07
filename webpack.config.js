module.exports = function(env) {
    return require(`./webpackConfig/webpack.${env.NODE_ENV}.js`)
};