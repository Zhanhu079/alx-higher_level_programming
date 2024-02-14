#!/usr/bin/node
function callMeMoby(x, code){
  for(let i =0; i < x ; i++) {
	  code();
  }
}
module.exports ={callMeMoby};
