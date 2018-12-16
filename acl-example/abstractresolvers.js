const { createResolver } = require('apollo-resolvers');
const { isInstance } = require('apollo-errors');
const { UnauthenticatedError, UnauthorizedError } = require('./errors');


const baseResolver = createResolver(
   null,
   (root, args, context, error) => isInstance(error) ? error : new UnknownError()
 );

const authenticatedResolver = baseResolver.createResolver(
    (root, args, { userType }) => {
        if (!userType) {
            throw new UnauthenticatedError();
        }
    }
)

const onlyAdminResolver = authenticatedResolver.createResolver(
    (root, args, { userType }) => {
        if (userType !== 'ADMIN') {
            throw new UnauthorizedError('Only admin!');
        }
    }
)

module.exports = {
    baseResolver,
    onlyAdminResolver,
    authenticatedResolver
}