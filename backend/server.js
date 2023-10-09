const app = require("./app");
const dotenv = require("dotenv");

const dbConnection = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });

dbConnection();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
