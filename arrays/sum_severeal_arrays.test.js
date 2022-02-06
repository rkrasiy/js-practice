const { sumArrays, sumArrays2 } = require('./sum_severeal_arrays');

describe('Sum of several arrays', ()=> {
  test('should return false when receive en empty arrays', ()=>{
    expect(sumArrays()).toBe(false)
  });

  test('should return false if it receive some string', ()=>{
    expect(sumArrays('alof a')).toBe(false)
  }) 

  test('should output 22 without reduce', ()=>{
    expect(sumArrays([[3, 2], [1], [4, 12]])).toBe(22)
  }) 
  test('should output 22 with reduce', ()=>{
    expect(sumArrays2([[3, 2], [1], [4, 12]])).toBe(22)
  }) 

})