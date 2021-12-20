const express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController"),
    layouts = require("express-ejs-layouts"),
    errorController = require("./controllers/errorController");

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use(layouts);

app.use(express.static("public"));

app.get('/', homeController.showHome);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.get("/about", homeController.showAbout);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server is running at ${app.get("port")}`);
});