const dotenv = require("dotenv").config();
const connectDB = require("./app/db/config");
const app = require("./app");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
