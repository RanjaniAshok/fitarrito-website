module.exports = {
  webpack(config:any) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
      
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};
