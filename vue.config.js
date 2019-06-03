const config = {
    productionSourceMap: true,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'src/index.html',
        },
    },
};
let fs = require('fs');
fs.readFile('./src/manifest.json','utf8',function(err,files){
    let result = files.replace(/##version##/g, process.env.npm_package_version);
    fs.writeFile('./public/manifest.json', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});


module.exports = config;