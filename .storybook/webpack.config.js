const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // remove svg from existing rule
    config.module.rules = config.module.rules.map(rule => {
        if (
            String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/)
        ) {
            return {
                ...rule,
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
            }
        }

        return rule
    });

    // use svgr for svg files
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
    });

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
};

// module.exports = {
//     module: {
//         rules: [{
//             test: /\.scss$/,
//             loaders: ["style-loader", "css-loader", "sass-loader"],
//             include: path.resolve(__dirname, "../")
//         }]
//     }
// };