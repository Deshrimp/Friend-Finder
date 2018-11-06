import friends from "../data/friends"

export default function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends)
  })
  app.post("/api/friends", function(req, res) {
    return res.json(friends)
  })
}
