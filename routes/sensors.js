var express = require('express');
var router = express.Router();
let op ={};
op.temp={};
op.light={};
op.humidity={};
op.temp.value=0;
op.light.value=0;
op.humidity.value=0
/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(op);
});
router.get('/:sensor/:value',(req,res,next)=>{
  console.log(req.params.sensor);
  console.log(req.params.value);
  let sensor=req.params.sensor;
  let value=req.params.value;
  value= Number(value);
  sensor=="t"?op.temp.value=value:
        sensor=="l"?op.light.value=value:
          sensor=="h"?op.humidity.value=value:console.log("Error");;
  res.json(op);
});
module.exports = router;
