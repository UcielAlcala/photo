var photos = [];
photos.push({
	name: 'Node.js Logo',
	path: 'hhtp://nodejs.org/images/logos/nodejs-green.png'
});

photos.push({
	name: 'Ryan Speaking',
	path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

photos.push({
	name: 'Ironman',
	path: 'http://worldversus.com/img/ironman.jpg'
})

photos.push({
	name: 'Hulk-Ironman',
	path: 'http://forwallpapers.com/wp-content/uploads/2013/10/Hulk-Custom-Iron-Man-HD-Wallpaper.jpg'
});

exports.list = function(req, res){
	res.render('photos',{
		title: 'Photos',
		photos: photos
	});
};