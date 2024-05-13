const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@src': resolvePath('src'),
            '@components': resolvePath('src/components'),
            '@pages': resolvePath('src/components/pages'),
            '@hooks': resolvePath('src/hooks'),
            '@UI': resolvePath('src/components/UI'),
            '@css': resolvePath('src/css'),
            "@API/*": resolvePath('API/*'),
        }
    },
}