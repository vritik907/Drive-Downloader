const {drive} = require("./drive")
const token = require("./tokens")
const mydrive = new drive(token)
const fs = require('fs').promises
// console.log(mydrive)
async function saveStreamInFile(){
	res = await mydrive.download(id="asdfasdf1P84somerandom-rwnygZeNpD3kpb3")
	for await (const chunk of res.body){
		fs.writeFile("./music.mp3",chunk,{flag:"a+"})
	}
}
saveStreamInFile()
