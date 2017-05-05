let express = require('express');
var jsonfile = require('jsonfile')
let path =require('path');
let cors = require('cors');
let fs = require('fs');
let mongodb = require('mongodb');
let router = express.Router();
let file = './data/led.json';

router.use(cors())
let op={};
op=jsonfile.readFileSync(file);


router.get('/',(req,res,next)=>{

op?console.log("true"):console.log("false");
console.log(op);
res.json(op);
});
router.get('/:swnum',(req,res,next)=>{
  console.log(req.params.swnum);
  let swnum= req.params.swnum;
  swnum= Number(swnum);
  switch (swnum) {
    case 0:
      op.switch0=0;
      res.send("sw0 0ff");
      jsonfile.writeFile(file, op, function (err) {
        console.error(err)
    })
      break;
      case 1:
        op.switch0=1;
        res.send("sw0 0n");
        jsonfile.writeFile(file, op, function (err) {
          console.error(err)
      })
        break;
        case 2:
          op.switch1=0;
          res.send("sw1 0ff");
          jsonfile.writeFile(file, op, function (err) {
            console.error(err)
        })
          break;
      case 3:
        op.switch1=1;
        res.send("sw1 0n");
        jsonfile.writeFile(file, op, function (err) {
          console.error(err)
      })
        break;
      case 4:
          op.switch2=0;
          res.send("sw2 0ff");
          jsonfile.writeFile(file, op, function (err) {
            console.error(err)
        })
        break;
      case 5:
          op.switch2=1;
          res.send("sw2 0n");
          jsonfile.writeFile(file, op, function (err) {
            console.error(err)
        })
          break;
      case 6:
            op.switch3=0;
            res.send("sw3 0ff");
            jsonfile.writeFile(file, op, function (err) {
              console.error(err)
          })
            break;
      case 7:
          op.switch3=1;
          res.send("sw3 0n");
          jsonfile.writeFile(file, op, function (err) {
            console.error(err)
        })
              break;
    default:
      res.send("failure");
      console.log("failure");
      break;
  }
});


module.exports = router;
