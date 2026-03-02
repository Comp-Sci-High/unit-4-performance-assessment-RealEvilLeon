const express = require('express')
const app = express()


let pokemonData = {
  "pokemon": [
    {
      "name": "Pikachu",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      "types": ["Electric"]
    },
    {
      "name": "Charizard",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "types": ["Fire", "Flying"]
    },
    {
      "name": "Bulbasaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "types": ["Grass", "Poison"]
    },
    {
      "name": "Greninja",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
      "types": ["Water", "Dark"]
    },
    {
      "name": "Lucario",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
      "types": ["Fighting", "Steel"]
    }
  ]
}



app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs')



// 4) Now in your views folder create your EJS file and add your HTML code from your planning document
app.get("/", (req,res) =>{
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/randomP", (req,res) =>{
    res.render('randomGen.ejs', pokemonData)
})




app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})











// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})