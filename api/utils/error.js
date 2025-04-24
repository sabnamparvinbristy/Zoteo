export const errorHandler = (statusCode, message) => {
    const error = new Error();        // ← typo here
    error.statusCode = statusCode;    // ← 'error' is not defined
    error.message = message;
    return error;
}
