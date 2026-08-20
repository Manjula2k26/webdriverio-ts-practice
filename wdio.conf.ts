export const config = {
    runner: 'local',

    specs: ['./features/**/*.feature'],

    maxInstances: 1,

    capabilities: [
        {
            browserName: process.env.TEST_BROWSER || 'chrome'
        }
    ],

    logLevel: 'info',

    framework: 'cucumber',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results'
        }]
    ],

    cucumberOpts: {
    require: ['./step-definitions/**/*.ts',
        './hooks/**/*.ts'
        ]
}
};