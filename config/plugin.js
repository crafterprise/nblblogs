require("dotenv").config();
console.log(process.env);

const crypto = require("crypto");
const jwtSecret = process.env.STRAPI_ADMIN_JWT_SECRET;
module.exports = ({ env }) => (
  {
    "users-permissions": {
      config: {
        jwtSecret:
          env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
      },
    },
  },
  console.log(env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"))
);
