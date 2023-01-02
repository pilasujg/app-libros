import express from "express";

import exphbs from "express-handlebars";

//import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";
import methodOverride from "method-override";
/*import flash from "connect-flash";
import session from "express-session";*/

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initializacion
const app = express();

// Settings
app.listen(app.get("port"), () => {
    console.log("en el puerto:", app.get("port"))
});
app.set("port", process.env.PORT || 3000);

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




// Global Variables  


// routes



// statics files

app.use(express.static(path.join(__dirname, "public")));

export default app;