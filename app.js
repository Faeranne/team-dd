express = require("express")
fs = require("fs")

app = express()
wordsFile = fs.readFileSync("dd-words.txt")
console.log(wordsFile)
words = wordsFile.toString().split(/\s+/)
console.log(words)
words.pop()

app.get("/", function(req,res){
	word1= Math.floor(words.length*Math.random())
	word2= Math.floor(words.length*Math.random())
	word1 = words[word1]
	word2 = words[word2]
	console.log("sent pair "+word1+" "+word2)
	res.send(word1+" "+word2)
})

app.listen(process.env.PORT || 3030)



