var express = require('express');
var jsonfile = require('jsonfile');
let cors = require('cors');
let file = './data/sensors.json';

var router = express.Router();
router.use(cors())
let op ={};
op=jsonfile.readFileSync(file);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(op);
    console.log(op);
});
router.get('/:sensor/:value',(req,res,next)=>{
  console.log(req.params.sensor);
  console.log(req.params.value);
  let sensor=req.params.sensor;
  let value=req.params.value;
  value= Number(value);
  sensor=="t"?op.temp.value=value:
        sensor=="l"?op.light.value=value:
          sensor=="h"?op.humidity.value=value:console.log("Error");
          jsonfile.writeFile(file, op, function (err) {
            console.error(err)
        })
  res.json(op);
});
module.exports = router;
