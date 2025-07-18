const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const cookieParser = require("cookie-parser");
const path = require('path');
const db = require("./configs/mongoose.connection.js");
const ownerRouter = require("./routes/ownerRouter.js")
const userRouter = require("./routes/userRouter.js")
const productRouter = require("./routes/productRouter.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/users", userRouter);
app.use("/owners", ownerRouter);
app.use("/products", productRouter);


app.get("/", function(req, res){
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
