const fs = require('fs');
const path = require('path');

//save image to folder uploads with base64 encodeing string
exports.saveImage = async (baseImage) => {
    console.log(path);
    const projectPath = path.join(__dirname, '../uploads');
    console.log("test path :" +projectPath);
    const ex = baseImage.substring(baseImage.indexOf('/') + 1, baseImage.indexOf(';base64'));

    //set file name
    let filename = "";
    if(ex === 'svg+xml'){
        filename = Date.now() + '.svg';
    }else{
        filename = Date.now() + '.' + ex;
    }

    let image = decodeBase64Image(baseImage);
    //save image to folder uploads
    await fs.writeFileSync(projectPath + '/' + filename, image.data, 'base64');
    return filename;
}

const decodeBase64Image = (dataString) => {
    let matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let response = {};
    if(matches.length !== 3 || !matches[1] || !matches[2]) {
        return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
    return response;
}