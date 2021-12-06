var express = require('express');
const { execSync } = require('child_process');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  let result = execSync(`python3 check.py ${req.body.a1} ${req.body.a2} ${req.body.a3} ${req.body.a4} ${req.body.a5} ${req.body.a6} ${req.body.a7} ${req.body.a8} ${req.body.a9} ${req.body.a10} ${req.body.a11} ${req.body.a12} ${req.body.a13} ${req.body.a14} ${req.body.a15} ${req.body.a16} ${req.body.a17} ${req.body.a18}`);
  res.send({probabilidad: result.toString()});
});

module.exports = router;
