import { body } from "express-validator";

export const contactValidator = [

  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 chars")
    .custom(value => {
      if (/<[^>]*>/g.test(value)) {
        throw new Error("HTML tags are not allowed");
      }
      return true;
    }),

  body("email")
    .trim()
    .isEmail().withMessage("Invalid email")
    .normalizeEmail(),

  body("service")
    .trim()
    .notEmpty().withMessage("Service is required")
    .custom(value => {
      if (/<[^>]*>/g.test(value)) {
        throw new Error("HTML tags are not allowed");
      }
      return true;
    }),

  body("message")
    .trim()
    .notEmpty().withMessage("Message is required")
    .isLength({ min: 3 }).withMessage("Message must be at least 3 chars")
    .custom(value => {
      if (/<[^>]*>/g.test(value)) {
        throw new Error("HTML tags are not allowed");
      }
      return true;
    }),
];



// import { body } from "express-validator";
// import sanitizeHtml from "sanitize-html";

// const clean = (value) =>
//   sanitizeHtml(value, {
//     allowedTags: [],
//     allowedAttributes: {}
//   });

// export const contactValidator = [
//   // NAME
//   body("name")
//     .trim()
//     .customSanitizer(clean)
//     .notEmpty().withMessage("Name is required")
//     .isLength({ min: 3 }).withMessage("Name must be at least 3 chars"),

//   // EMAIL
//   body("email")
//     .trim()
//     .isEmail().withMessage("Invalid email")
//     .normalizeEmail(),

//   // SERVICE
//   body("service")
//     .trim()
//     .customSanitizer(clean)
//     .notEmpty().withMessage("Service is required"),

//   // MESSAGE
//   body("message")
//     .trim()
//     .customSanitizer(clean)  // ← XSS Protection
//     .isLength({ min: 3 }).withMessage("Message must be at least 3 chars")
// ];
