const environments = {
    test: {
        baseUrl: 'https://www.saucedemo.com/'
    },

    qa: {
        baseUrl: 'https://www.saucedemo.com/'
    }
};

const currentEnvironment = process.env.TEST_ENV || 'test';

export const environment =
    environments[currentEnvironment as keyof typeof environments];