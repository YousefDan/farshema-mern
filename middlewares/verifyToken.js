const jwt = require("jsonwebtoken");

// verify token
function verifyToken(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return res.status(403).send("invalid token");
      }
      req.user = data;
      next();
    });
  } else {
    res.status(401).send("access denied! , no token provided");
  }
}

// verify token and authorize the user
function verifyTokenAndAuthorize(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("you are not allowed");
    }
  });
}

// verify token and only admin
function verifyTokenAndAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (!req.user.isAdmin) {
      return res.status(403).send("only admin");
    }
    next();
  });
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorize,
  verifyTokenAndAdmin,
};
