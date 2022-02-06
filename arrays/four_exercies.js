function palindromo(text) {
  return text === text.split('').reverse().join('');
}
//palindromo('text')

function getCoinsidence (text, search){
  let newText = text.toLowerCase().trim().replace(/[!¡.,-]/gi, '');
  let resuld = 0;
  if(newText.includes(search)){
    let words = newText.split(' ');
    let map = {};
    for(let word of words){
      if(map[word]){
        map[word]++
      }else{
        map[word] = 1
      }
    }
    resuld = map[search]
  }

  return resuld
}

//console.log(getCoinsidence('Hodlas jam..  jam jam , adasd ,sadad  ,  ! Asda', 'como'));

function invert (word){
  let invertedText = ''
  for(let char of word){
    invertedText = char + invertedText
  }
  return invertedText
}
//console.log(invert('Ruslan'))

function side(num) {
  let side = "";

  for(let i = 0; i < num; i++){
    side += '*';
  }
  return side;
}
function cube(num) {
  let cube = side(num) + '\n';
  let content = ''

  for(let i = 2; i < num;i++){
    content = '*';
    for(let j = 2; j < num; j++){
      content += ' '
    }
    content += '*';
    cube += content + '\n';
  }
  cube += side(num);

  return cube
}
console.log(cube(4));