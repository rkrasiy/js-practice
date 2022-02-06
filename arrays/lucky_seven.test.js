const { lucky_sevens } = require ('./lucky_seven');

describe('lucky sevens', ()=>{
  test('should return false if we pass empty array', ()=>{
    expect(lucky_sevens([])).toBe(false)
  })

  test('should return error if array less than 3 elements', ()=>{
    expect(lucky_sevens([3,2])).toBe('Not possible')
  })

  test('should return true', ()=>{
    expect(lucky_sevens([3,2,2])).toBe(true)
  });

  test('should return false', ()=>{
    expect(lucky_sevens([3,2,1,5,12,55])).toBe(false)
  });

  test('should return false', ()=>{
    expect(lucky_sevens([3,2,1])).toBe(false)
  })

   test('should return false, if we pass mixed array', ()=>{
    expect(lucky_sevens([3,2,'hola',1])).toBe(false)
  })

})