module.exports = (err, req, res, next) => {
    res.status(500).json({
        message: err.message
    });
};
console.log("Error middleware loaded");