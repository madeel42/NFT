const router = require('express').Router();
let { Data } = require('../models/data')

router.post('/', (req, res) => {
    Data.findOne({ id: req.body.id }, (err, result) => {
        if (err) {
            return console.log(err)
        }
        // If record exist then return 'Success'
        if (result) {
            data = result
        } else {
            data = { status: 'Record Not found' };
        }
        res.send(data);
    });

})
module.exports = router