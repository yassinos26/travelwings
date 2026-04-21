const router = require("express").Router();
const upload = require("../middlewares/upload");
const cloudinary = require("../utils/cloudinary");

router.post("/upload", upload.single("image"), async (req, res) => {
    const result = await cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
        if (error) return res.status(500).json(error);
            res.json({ url: result.secure_url });
        }
    ).end(req.file.buffer);
});

module.exports = router;
console.log("Upload routes loaded");
