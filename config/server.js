require("dotenv").config();
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  // host: env("https://nblblog.herokuapp.com/"),
  proxy: true,
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["banana", "apple"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
