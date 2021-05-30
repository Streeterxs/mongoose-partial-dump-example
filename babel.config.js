module.exports = {
    presets: [
        '@babel/preset-typescript'
    ],
    plugins: [
        // https://github.com/parcel-bundler/parcel/issues/871#issuecomment-370135105
        // https://github.com/babel/babel-loader/issues/560#issuecomment-370180866
        '@babel/plugin-transform-modules-commonjs'
    ]
}
