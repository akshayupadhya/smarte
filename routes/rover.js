var express = require('express');
var jsonfile = require('jsonfile');
let cors = require('cors');
let file = './data/rovers.json';

var router = express.Router();
router.use(cors());

let op={};
op=jsonfile.readFileSync(file);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.json(op);
    console.log(op);
});
op.dir;
router.get('/:dir',(req,res,next)=>{
  //console.log(req.params.dir);
  let dir = req.params.dir;
  dir =Number(dir);
  switch (dir) {
    case 0:
        res.send(op.dir);
        op.dir = "start";
      break;
      case 1:
          res.send(op.dir);
          op.dir = "up";
        break;
      case 2:
          res.send(op.dir);
        op.dir = "right";
        break;
        case 3:
            res.send(op.dir);
          op.dir = "down";
          break;
        case 4:
            res.send(op.dir);
          op.dir = "left"
          break;
        case 5:
            res.send(op.dir);
            op.dir ="stop"
          break;
    default:
        res.send(op.dir);
  }
  jsonfile.writeFile(file, op, function (err) {
    console.error(err)
})
});
module.exports = router;
