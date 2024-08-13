const { body, validationResult } = require("express-validator");

const validateContestant = [
  body("firstName").isString().notEmpty().withMessage("First name is required"),
  body("middleName")
    .optional()
    .isString()
    .withMessage("Middle name must be a string if provided"),
  body("lastName").isString().notEmpty().withMessage("Last name is required"),
  body("party").isString().notEmpty().withMessage("Party is required"),
  body("position").isString().notEmpty().withMessage("Position is required"),
  body("LGA").isString().notEmpty().withMessage("LGA is required"),
  body("state").isString().notEmpty().withMessage("State is required"),
  body("country").isString().notEmpty().withMessage("Country is required"),
  body("image")
    .optional()
    .isString()
    .withMessage("Image must be a string if provided"),
  body("partyLogo")
    .optional()
    .isString()
    .withMessage("Party logo must be a string if provided"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateContestant };
