import { body } from "express-validator";

export const createBaggageValidator =  [
body("name")
     .notEmpty()
      .withMessage("Name should not be empty")
      .trim()
      .escape(),
      body("completed")
        .optional()
        .isBoolean()
        .withMessage("Completed should be either true or false"),
    validate,
];