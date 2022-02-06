const simpleClockAngle = (num) => {
  // 12 h clock 
  //1h has 60 min 360 / 60

  if(typeof num !== 'number' ||
    num > 60 || 
    num < 0)
    return false;

  return num * 6
}

exports.simpleClockAngle = simpleClockAngle;