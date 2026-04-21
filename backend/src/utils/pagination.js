module.exports = (req) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    const safeLimit = Math.min(limit, 50);
    const safePage = Math.max(page, 1);

    const skip = (safePage - 1) * safeLimit;

    return {
        page: safePage,
        limit: safeLimit,
        skip
    };
};
console.log("Pagination utils loaded");