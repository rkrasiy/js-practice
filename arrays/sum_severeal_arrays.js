const sumArrays = ( arr )=>{
  if(!Array.isArray(arr) || arr.length === 0)
  return false;

  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j ++){
      sum += arr[i][j];    
    }
  }

  return sum;
}

const sumArrays2 = (arr) => {
  return arr.reduce((a , b) => a.concat(b)).reduce( (a, b) => a + b)
}


exports.sumArrays = sumArrays;
exports.sumArrays2= sumArrays2;
