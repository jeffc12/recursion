// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
//test for array
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

if (typeof obj === 'object') {


    for (var i in obj) {
      if (typeof(obj[i]) === 'function' || obj[i] === undefined) {
        continue;
      }


      array.push(stringifyJSON(i) + ':'+stringifyJSON(obj[i]));
    }
    //console.log(array);
    array = '{'+array+'}';

    return array;
  }


  // test if the object
//console.log(obj);
  if (typeof obj === 'string') {

    return '"'+ obj +'"';
  }

  if  (typeof obj === 'number') {

    return obj.toString();
  }
  if  (typeof obj === 'boolean' || obj === null) {
    //console.log(obj.toString());
    return obj.toString();
  }

};

//test
//console.log(stringifyJSON(['hi', 0,true, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]));
//console.log(stringifyJSON({'a': 'hi', 'b':true}));
