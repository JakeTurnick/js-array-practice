// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    //your awesome code here
    for (let i = 0; i < array.length; i++) {
      count = i + 1;
      array[i] = `${count}: ${array[i]}`
    }
    return array;
  }


// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => {
    let newArr = [];
    for (let i = 0; i < N; i++) {
      newArr.push(i);
    }
    return newArr
  };


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){

  let count;
  if (drone.length > lamps.length) {
    count = lamps.length
  } else {
    count = drone.length
  }

  let path = '';
  for (let i = 0; i < count; i++) {
    path += 'o'
  }
  let offLamps = lamps.slice(drone.length, lamps.length);
  let droneLamps = path + offLamps;
  
  return droneLamps;

}


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let avg = sum / marks.length;
  return Math.floor(avg)
}


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043
