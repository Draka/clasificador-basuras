var express = require('express');
const { execSync } = require('child_process');
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res, next) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  console.log(req.files)
  imageFile = req.files.imagen;
  imageFile.mv('./public/images/upload', function(err) {
    if (err)
      return res.status(500).send(err);

      let result = execSync(`python3 check.py`);
      res.render('result', { title: 'Clasificación de residuos sólidos', type: result.toString()});
  });

  
});

module.exports = router;
