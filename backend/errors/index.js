const CustomAPIError = require('./custom_error')
const BadRequestError = require('./bad_request')
const UnauthenticatedError = require('./unauthenticated')
const NotFoundError = require('./not_found')

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticatedError,
    NotFoundError
}