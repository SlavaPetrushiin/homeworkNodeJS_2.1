module.exports.get = (req, res) => {
	let otbrazhenieDate = setInterval(function(){

	}, 5000 )
	res.send('mmm')
}

function date(){
	let days = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота',
		]
	let now = new Date();
	let year = now.getFullYear();
	let month = now.getMonth();
	let date = now.getDate();
	let day = days.filter((day, index) => index === now.getDay());
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let resultTime = `${hour}:${minutes}:${seconds}, ${day}, ${date} ${month} ${year} г.`
	return resultTime;
}