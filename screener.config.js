module.exports = {
    projectRepo: 'billmeyer/screener-components',
    storybookConfigDir: '.storybook',
    storybookStaticDir: 'public',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768',
    baseBranch: 'master',
    browsers: [
        {
            browserName: 'chrome'
        }
        // {
        //   browserName: 'safari',
        //   version: '11.1'
        // }
    ],
    sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        maxConcurrent: 10 // optional available concurrency you have from Sauce Labs
    }
};
