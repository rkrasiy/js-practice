const { simpleClockAngle } = require('./simple_clock_angle');

describe('Simple Clock Angle', ()=>{
  test('should return false when we call an empty function', ()=>{
    expect(simpleClockAngle()).toBe(false);
  });


  test('should return false if we pas a string', ()=>{
    expect(simpleClockAngle('15')).toBe(false);
  });

  test('should return false if receive number less than 0', ()=>{
    expect(simpleClockAngle(-2)).toBe(false);
  });
  
  test('should return false if receive number more than 60', ()=>{
    expect(simpleClockAngle(65)).toBe(false);
  });
  
  test('should return angle if we pass 15 min', ()=>{
    expect(simpleClockAngle(15)).toBe(90);
  });
})