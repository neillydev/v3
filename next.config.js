/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
        { test: /\.(pdf)$/, use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/images/' } } ] },)
        return config
      },    
}

module.exports = nextConfig
