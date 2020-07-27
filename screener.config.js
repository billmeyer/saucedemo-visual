module.exports = {
    projectRepo: 'billmeyer/ui-components',
    storybookConfigDir: '.storybook',
    storybookStaticDir: 'public',
    apiKey: process.env.SCREENER_API_KEY,
    resolution: '1024x768',
    baseBranch: 'master',
    // newSessionForEachState: true,
    browsers: [
        {
            browserName: 'chrome'
        },
        // {
        //     browserName: 'firefox'
        // }
        // {
        //   browserName: 'safari',
        //   version: '11.1'
        // }
    ],
    sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        maxConcurrent: 10, // optional available concurrency you have from Sauce Labs
        // extendedDebugging: true, // optional
        // tunnelIdentifier: 'qa-desktop-1' // optional
        //    launchSauceConnect: true // have screener-runner manage my sauce connect tunnels for me
    }
};
