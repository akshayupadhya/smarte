let path =require('path');
let fs = require('fs');
var jsonfile = require('jsonfile');
let op1={"status":0,"prev":0};
let op;
let bool0=false;
let bool1=true;

class switche {

  constructor(file,status) {
    file= this.file;
    status=this.status;
  }
  function opf12(){
    op=fs.readFileSync(file, 'utf8');
    op=JSON.parse(op);
    return op;
  }
   function onOff(status = op.status){
    op1.status=req.params.status;
    if (op1.status==1) {
      op1.prev=bool0;
      op1.status=bool1;
      res.send("success");
    } else {
      op1.prev=!(bool0);
      op1.status=!bool1;
    }
    jsonfile.writeFile(file, op1, function (err) {
    console.error(err)
  })

  }
}module.exports= switche;
