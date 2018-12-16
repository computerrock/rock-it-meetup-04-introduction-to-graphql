const { createError } = require('apollo-errors');

const UnauthenticatedError = createError('UNAUTHENTICATED', {
    message: 'You are not authetnicated. Please login'
});

const UnauthorizedError = createError('UNAUTHENTICATED', {
    message: 'You are forbidden to to this action'
});

module.exports = {
    UnauthenticatedError,
    UnauthorizedError
};