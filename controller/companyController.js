const db = require('../db.js');
const Company = require('../models/company.js');
const saveImage = require('../controller/uploadImageController.js');

exports.Create = async (req, res) => {
    try {
        var photo = await saveImage.saveImage(req.body.photo);
        var c = new Company(req.body.name, req.body.address, photo);
        const q = `INSERT INTO company (name, address, photo) VALUES (?, ?, ?)`;
        db.query(q, [c.name, c.address, c.photo], (err) => {
            if (err) {
                res.status(500).json({
                    message: 'Create company failed',
                    error: err
                });
            } else {
                return res.status(200).json({
                    message: 'Create company successfully',
                });
            }
        });
    
    } catch (error) {
        res.status(500).json({
            message: 'Create company failed',
            fail: 'you faill',
            error: error.body
        });
        console.log(error);
    }
}