const formatDate = (date) => {
  // Format date as needed
  return new Date(date).toLocaleDateString();
};

module.exports = { formatDate };
