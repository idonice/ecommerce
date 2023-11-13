const express = require("express");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

//database connection
mongoose
  .connect(
    "mongodb+srv://idonice3:BhqMKSmk99G2fpYB@cluster0.vddvrkr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database not connected", err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/routes"));

const port = 5173;
app.listen(port, () => console.log(`server is running on port ${port}`));
