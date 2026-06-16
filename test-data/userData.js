// Centralized test users
export const userData = {

    validUser: {
        email: process.env.TEST_EMAIL,
        password: process.env.TEST_PASSWORD
    },

    invalidUser: {
        email: 'fake@test.com',
        password: 'wrongPassword'
    }
};