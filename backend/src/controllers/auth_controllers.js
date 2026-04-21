const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register endpoint
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hash });

  res.json(user);
};

// login endpoint
exports.login = async (req, res) => {
   // check user 
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(404).json({ msg: "User not found" });
    
    // check password 
    const match = await bcrypt.compare(req.body.password, user.password);
    
    if (!match) return res.status(400).json({ msg: "Wrong password" });

    // 🔥 ACCESS TOKEN (court)
    const accessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    // 🔥 REFRESH TOKEN (long)
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_SECRET,
      { expiresIn: "7d" }
    );

    // 💾 stocker refresh token en DB
    user.refreshToken = refreshToken;
    await user.save();

    res.json({
    accessToken,
    refreshToken
    });
};

// refresh token endpoint
exports.refreshToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ msg: "No refresh token" });
  }

  try {
    // 🔍 vérifier token
    const decoded = jwt.verify(token, process.env.REFRESH_SECRET);

    // 🔍 vérifier user
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== token) {
      return res.status(403).json({ msg: "Invalid refresh token" });
    }

    // 🔥 générer nouveau access token
    const newAccessToken = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });

  } catch (err) {
    res.status(403).json({ msg: "Token expired or invalid" });
  }
};

// logout endpoint
exports.logout = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.refreshToken = null;
  await user.save();

  res.json({ msg: "Logged out" });
};

console.log("Auth controller loaded");