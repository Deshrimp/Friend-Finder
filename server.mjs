//TODO: WHY was npm install not working, how do u start it then

// Dependencies
// =============================================================
import express from "express"
import path from "path"
import apiRoutes from "./app/routing/apiRoutes.mjs"
import htmlRoutes from "./app/routing/htmlRoutes.mjs"

//__dirname is not defined in experimental node
const __dirname = path.dirname(new URL(import.meta.url).pathname)
// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 8080
const publicPath = path.join(__dirname, "app/public")

//TODO: what is a middleware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//Anything in this folder will be served "as is" when requested by the browser
app.use(express.static(publicPath))

apiRoutes(app)
htmlRoutes(app)

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
