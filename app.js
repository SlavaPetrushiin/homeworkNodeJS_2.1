const http = require("http");

let userInterval = process.argv[2];
let userEnd = process.argv[3];
let count = 0;

if(typeof userInterval === 'string' &&  typeof userEnd === 'string'){
	userInterval = Number(userInterval);
	userEnd = Number(userEnd);
} else {
	userInterval = 5000;
	userEnd = 60000;
}

http.createServer((req, res) => {
	console.log(req.url)
	let now = new Date();
	let nowStart = now.getTime();
	let nowEnd = nowStart + userEnd;

	let getDateConsole = setInterval(()=> {
		let currentTime = new Date();
		if(currentTime.getTime() <= nowEnd && req.url !== '/favicon.ico'){
			count++;
			console.log(new Date().toUTCString(), count);
		} else {
			clearInterval(getDateConsole);
		}
	}, userInterval);

	res.writeHead(200, { 'Content': 'text/plain' })
	res.end(now.toUTCString())
}).listen(3000, () => {
	console.log('Сервер работает')
})

