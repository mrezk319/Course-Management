const app = require('./app');
const mongoose = require("mongoose");



mongoose
  .connect(process.env.DATABASE)
  .then((val) => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
  });
app.listen(process.env.PORT, () =>
  console.log(`Course Management app listening on port ${process.env.PORT}!`)
);