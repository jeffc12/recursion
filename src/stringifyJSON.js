// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
//test for array
//console.log(obj);

    var array = [];
      if (Array.isArray(obj)) {

          if (obj[0] === undefined) {
              return '['+array+']';
            }
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

if (typeof obj === 'object') {
_.each(obj, function(value,key) {

  objArray.push(stringifyJSON(key) + ':' + stringifyJSON(val));

})

  return '{'+ objArray +'}';

}

  // test if the object
//console.log(obj);
  if (typeof obj === 'string') {

    return '"'+ obj +'"';
  }
  if (typeof obj === null) {
    return 'null';
  }
  if (typeof obj === 'function' || obj === undefined) {
    continue;
  }
  else {
    return obj.toString()
  }

};

//test
//console.log(stringifyJSON(['hi', 0,true, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]));
//console.log(stringifyJSON({'a': 'hi', 'b':true}));
console.log(stringifyJSON({}));
