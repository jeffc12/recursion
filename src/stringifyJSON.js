// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
//test for array
//console.log(obj);
    var array = [];
      if (Array.isArray(obj)) {

            obj.forEach(function(index){

              array.push(stringifyJSON(index));
            })

            return '['+array+']';
            //console.log(array);
      }

// Test if obect
/// using underscore (new plan)
//
var objArray = [];
// test if this is an object
// deep test for protoype chain and protoype props
if (obj instanceof Object) {

// underscore for each to cycle key and value of an object
_.each(obj, function(value,key) {
  if ((value) === undefined || typeof value === 'function') {
     return;
    }
  objArray.push(stringifyJSON(key) + ':' + stringifyJSON(value));

})
  return '{'+ objArray +'}';
}

  // test if the object
//console.log(obj);
  if (typeof obj === 'string') {

    return '"'+ obj +'"';
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'function' || obj === undefined) {
    return;
  }
  else {
    return obj.toString();
  }

};
