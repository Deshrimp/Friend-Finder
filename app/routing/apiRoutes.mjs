import { friends } from "../data/friends.mjs"

export default function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends)
  })
  app.post("/api/friends", function(req, res) {
    const newPerson = req.body
    const { scores } = newPerson
    const matchesIndex = compareAnswers(scores, friends)
    friends.push(newPerson)
    res.json(friends[matchesIndex])
  })
}

// returns the index of the match
function compareAnswers(answers, friends) {
  let differences = []
  //Go through all my users
  for (let i = 0; i < friends.length; i++) {
    //Scores of each match
    const MatchScores = friends[i].scores
    //Map to get a new array with the difference of both arrays
    const difference = answers.map((myScore, currentIndex) =>
      Math.abs(myScore - MatchScores[currentIndex])
    )
    //This is the total diffeence
    const totalDif = difference.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    differences.push(totalDif)
  }
  let lowestIndex = 0

  for (let j = 0; j < differences.length; j++) {
    if (differences[j] < differences[lowestIndex]) {
      lowestIndex = j
    }
  }
  return lowestIndex
}
