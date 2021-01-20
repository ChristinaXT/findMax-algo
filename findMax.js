//find max function

function findMax(arr) {
  let max = arr[0];
  for (let i=0; i<arr.length; i++){
    if (arr[i] > max) max = arr[i]
  }
  return max;
  // console.log(max);
}


findMax([100, 5, 10, 20, 80])
//100

console.log(findMax([100, 5, 10, 20, 80]));
