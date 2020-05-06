const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminOptipng = require('imagemin-optipng')

(async () => {
	const files = await imagemin(['public/assets/*.png'], {
		destination: 'public/assets',
		plugins: [
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();



// 'use strict';
// const fs = require('fs');
// const imagemin = require('imagemin');

// const plugins = [
//   ['imagemin-gifsicle', {
//     interlaced: true,
//   }],
//   ['imagemin-jpegtran', {
//     progressive: true,
//   }],
//   ['imagemin-optipng', {
//     optimizationLevel: 5,
//   }],
//   ['imagemin-svgo', {
//     plugins: [
//       {removeViewBox: false},
//     ],
//   }],
// ].map(it => require(it[0])(it[1]))

// const minifyFile = filename =>
//   new Promise((resolve, reject) =>
//     fs.readFile(filename, (err, data) => err ? reject(err) : resolve(data))
//   )
//   .then(originalBuffer => imagemin
//     .buffer(originalBuffer, { plugins })
//     .then(minimizedBuffer => ({
//       // minimized: minimizedBuffer !== originalBuffer,
//       // originalSize: originalBuffer.length,
//       minimizedBuffer,
//     }))
//   ).then(({ minimizedBuffer }) => new Promise((resolve, reject) =>
//     fs.writeFile(filename, minimizedBuffer, err => err ? reject(err) : resolve())
//   ))

// Promise.resolve(process.argv)
//   .then(x => x.slice(2))
//   .then(x => x.map(minifyFile))
//   .then(x => Promise.all(x))
//   .catch(e => {
//     console.error(e)
//     process.exit(1)
//   })

