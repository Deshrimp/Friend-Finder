import path from "path"
const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../pages/home.html"))
  })
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../pages/survey.html"))
  })
}
