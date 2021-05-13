const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const ffmpeg = require('ffmpeg');
const _ = require('lodash');


// directory path
const dir = './assets/raw';

const processingFiles = [];

// list all files in the directory
fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }

    // files object contains all files names
    // log them on console
    files
        .filter(file => _.endsWith(file, 'Afro hittin trains.mp4'))
        .forEach((file) => {
            process
            try {
                var process = new ffmpeg(`./${dir}/${file}`);
                process.then(function (video) {
                    video
                        .setVideoSize('320x?', true, true, '#fff')
                        .setDisableAudio()
                        .setVideoFormat('gif')
                        .save(`./assets/processed/${file}`, function (error, file) {
                            if (!error)
                                console.log('Video file: ' + file);
                        });
        
                }, function (err) {
                    console.log('Error: ' + err);
                });
            } catch (e) {
                console.log(e.code);
                console.log(e.msg);
            }
        });
});

// const processFile = (file) => {
//     console.log(`${dir}/${file}`);
//     try {
//         const process = new ffmpeg(`${dir}/${file}`)
//             .then((video) => {
//                 video
//                     .setDisableAudio()
//                     .setVideoSize('320x?', true, true, '#fff')
//                     .setVideoFormat('gif')
//                     .save(`${dir}/processed/${file}`, (error, file) => {
//                     if (!error) {
//                         console.log('Video file: ' + file);
//                     }
//                 })
//             }, (error) => console.log(error));
//         processingFiles.push(process);
//         // console.log(`${dir}/${file}`);
//         // console.log(process);
//     } catch (e) {
//         console.log('encountered an error')
//         console.log(e.code);
//         console.log(e.message);
//     }
// }
