let fetch=require('node-fetch');
let op;
let url ='https://powerful-beach-46971.herokuapp.com/led/';
let current;
setInterval(()=>{
  op=fetch(url)
  .then((response) => response.json())
  .then((json)=>{
    console.log(json);
    json.status=="0"?console.log("off"):console.log("on")
    current=json.status;
    })
  .catch((e)=>{
    console.log(e);
  });

  console.log (op);

},2000);
