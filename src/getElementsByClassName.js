// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // test for class name in
  // your code here
  //this problem must have memory
  //since we need to look for each childNode for
  //the className as well

  var array = [];
  // starts by inputing body for input
  var body = document.body;

  function search(name) {
    if(name.classList) {
      //Search for relationship with className
      var list = name.classList.toString();
      if (list.indexOf(className) !== -1) {
        array.push(name);
      }
    }
    // search each Child and run search to recursion to push
    //into the array;
      name.childNodes.forEach(function(eachChild) {
        search(eachChild);
    })
  }
   search(body);
   return array;

 }
