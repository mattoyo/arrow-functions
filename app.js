// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

arr = [1,4,8,12]

  const double = arr => arr.map(val => val * 2);


//   function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

numbers = [ 1, 5, 3, 7, 8, 5, 2]

  const squareAndFindEvens = numbers => numbers
  .map(num => num ** 2)
  .filter(square => square % 2 === 0)