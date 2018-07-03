var numbers = [1, 2, 3, 4];

function reverseArray(list) {
  for (var i = list.length; i > 0; i--) {
    console.log(list[i - 1]);
  }
}

reverseArray(numbers);

function isUniform(list) {
  for (var i = 1; i < list.length; i++) {
    if (list[i] !== list[0]) {
      return false;
    }
    return true;
  }
}
isUniform([1, 1, 1, 1]);
console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["a", "a", "a"]));

//Sum Array
function sumArray(list) {
  var sum = 0;
  list.forEach(element => {
    sum += element;
  });
  console.log(sum);
}

sumArray([1, 2, 3]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100]);

function max(list) {
  var max = list[0];
  list.forEach(element => {
    if (element > max) {
      max = element;
    }
  });
  console.log(max);
}

max([1, 2, 3]);
max([10, 3, 10, 4]);
max([-5, 100]);
