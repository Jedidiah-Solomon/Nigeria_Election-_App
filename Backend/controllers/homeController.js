// Create home point
exports.home = async (req, res) => {
  res.json({
    message: "Welcome to the Election App API Endpoints!",
    status: "success",
    timestamp: new Date().toISOString(),
  });
};
