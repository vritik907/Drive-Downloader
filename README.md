
# DriveDownloader
This is module that will help you to manage your google drive files programmatically

## Dependencies 


| Library Name | Priority     | Description                |
| :-------- | :------- | :------------------------- |
| [getRefreshToken](https://github.com/hitesh911/getRefreshToken) | **Required** | This will help you to generate access or refresh token by which you can render the file |

### INSTALLATION

```
npm install drivedownloader
```
_It will download all the dependencies automatically_

### Usage

**NOTE** : Make sure to get your credentials file from [google cloud console](https://console.cloud.google.com/)

**First you needs to generate token file. To generate, you can use the code below**
```
const generateToken = require("getRefreshToken");
await getRefreshToken(pathOfCreditialFile, TokenSavePath); // You must have to pass the path of your cred file and token path is optional it will save token in pwd (Present working directory but its optional )
```

**To download the file you can use this demo code**

```
const {drive} = require("drivedownloader") // import the library
const token = require("./tokens") // Import the token
const mydrive = new drive(token) // create a new instance drive class with you token on it
const fs = require('fs').promises // import fs to use file system
// Function declaration to download the file
async function saveStreamInFile(fileId){
	res = await mydrive.download(id=fileId)
	for await (const chunk of res.body){
		fs.writeFile("./filename.extension",chunk,{flag:"a+"})
	}
}
saveStreamInFile(file-id) // call the function 
```

### Pros & Cons

**Pros**

- Support [cloud flare worker](https://workers.cloudflare.com/)
- You can also download multiple files
- ES6 also supported
- Virus protection bypassed
- Easy to implement
- No complexity
- Download limit bypassed
- No external library used ( Direct http API is used to reduce dependencies )

**Cons**

- getRefreshToken will not work with ES6 syntax
- File size is not included yet which means you will not able to see total size of file currently

## **Thanks for using :-)**
