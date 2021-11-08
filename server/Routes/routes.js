const router = require('express').Router();
let { Data } = require('../models/data');
router.post('/', async (req, res) => {
    const { name, description, id, imgUrl } = req.body
    let newNFTData = new Data({ name, description, id, imgUrl })
    newNFTData.save().then(NFTData => {
        console.log(NFTData);
        res.send(NFTData)
    })
        .catch(err => console.log(err));

})


module.exports = router