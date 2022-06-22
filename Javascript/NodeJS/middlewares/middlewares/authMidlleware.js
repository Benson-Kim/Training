exports.authorize = (req, res, next) => {
    if (req.query.admin === 'true') {
        next()
    } else {
        res.send('You are not an admin')
    }
    
    
}