import express from "express";
let exphbs = require ("express-handlebars");

//import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
import methodOverride from "method-override";
/*import flash from "connect-flash";
import session from "express-session";*/

// Initializacion
const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs.engine({
    layoutsDir:path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main"
}));

app.set("view engine", ".hbs");

//mildewares

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
/*app.subscribe(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());*/


// Global Variables  


// routes

app.use(require("./routes/index.routes"));
app.use(require("./routes/books.routes"));
app.use(require("./routes/users.routes"));

// statics files

app.use(express.static(path.join(__dirname, "public")));

export default app;