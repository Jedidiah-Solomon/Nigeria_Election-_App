const {
  formatDate,
  capitalizeFirstLetter,
  truncateText,
} = require("../utils/helperFunctions");

const utilsControllerFunction = (req, res) => {
  // Extract title, date, and description from the request body
  const { title, date, description } = req.body;

  // Use the helper functions to format the data
  const formattedTitle = capitalizeFirstLetter(title);
  const formattedDate = formatDate(date);
  const truncatedDescription = truncateText(description, 100);

  // Respond with the formatted data
  res.json({
    title: formattedTitle,
    date: formattedDate,
    description: truncatedDescription,
  });
};

module.exports = { utilsControllerFunction };
