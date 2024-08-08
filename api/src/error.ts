const { GraphQLError } = require("graphql");

export const throwExistingUserError = () => {
    throw new GraphQLError('User already exists', {
        extensions: {
            code: 'CONFLICT',
        },
    })
}

export const throwLoginError = () => {
    throw new GraphQLError('Lacks valid authentication', {
        extensions: {
            code: 'UNAUTHORIZED',
        },
    })
}

export const throwInternalError = () => {
    throw new GraphQLError('Internal server error', {
        extensions: {
            code: 'INTERNAL_SERVER_ERROR',
        },
    })
}
