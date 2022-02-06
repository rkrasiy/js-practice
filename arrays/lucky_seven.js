//Write a function called lucky_sevens which takes an 
//array of integers and returns true if any three
//consecutive elements sum to 7.

const lucky_sevens = (arr) => {
  if(!Array.isArray(arr) || arr.length === 0 )
    return false;
  if(arr.length < 3) 
    return 'Not possible'
  for(let i = 2; i < arr.length; i++){
    if(arr[i] + arr[i - 1] + arr[i -2] === 7){
      return true;
    }
  }

  return false;
}

console.log(lucky_sevens([3,2,1]))
exports.lucky_sevens = lucky_sevens;