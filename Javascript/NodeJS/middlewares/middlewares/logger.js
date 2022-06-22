exports.logger = (req, res, next) => {
    console.log('This is a middleware');
    next()
}