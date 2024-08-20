const formatDate = (date, locale = "en-US", options = {}) => {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(locale, {
    ...defaultOptions,
    ...options,
  });
};

const capitalizeFirstLetter = (string) => {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

module.exports = { formatDate, capitalizeFirstLetter, truncateText };
