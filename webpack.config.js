const path = require('path');
module.exports = {
    entry: './src/index.js', //go to source and look at index.js, this is were the logic of out code will be
    output: { //and then once you run the webpack command write this main.js is the dest 
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }

};